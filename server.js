const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = path.join(__dirname, "public");
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "taskflow.json");
const sessions = new Map();
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function readDatabase() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return { users: [] };
  }
}

function writeDatabase(database) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const temporaryFile = `${DATA_FILE}.${process.pid}.tmp`;
  fs.writeFileSync(temporaryFile, JSON.stringify(database, null, 2));
  fs.renameSync(temporaryFile, DATA_FILE);
}

function sendJson(response, status, body, headers = {}) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers
  });
  response.end(JSON.stringify(body));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(Object.assign(new Error("Request body is too large."), { status: 413 }));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(Object.assign(new Error("Request body must be valid JSON."), { status: 400 }));
      }
    });
    request.on("error", reject);
  });
}

function cookieValue(request, name) {
  const cookie = (request.headers.cookie || "")
    .split(";")
    .map(part => part.trim())
    .find(part => part.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : "";
}

function getUser(request, database) {
  const userId = sessions.get(cookieValue(request, "taskflow_session"));
  return database.users.find(user => user.id === userId);
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

function sessionCookie(token, maxAge = 60 * 60 * 24 * 14) {
  return `taskflow_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}

function newId() {
  return crypto.randomUUID();
}

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function sampleTasks() {
  const now = new Date().toISOString();
  const examples = [
    ["Complete DBMS Assignment", "Finish the normalization exercises and submit the final document.", "Study", "High", "In Progress", 0, "17:00", [["Review assignment brief", true], ["Complete ER diagrams", true], ["Write normalization answers", false], ["Proofread and submit", false]]],
    ["Prepare Java Presentation", "Put together a concise deck for the object-oriented programming seminar.", "Work", "Medium", "To Do", 1, "10:30", [["Outline key concepts", false], ["Build presentation slides", false], ["Rehearse the demo", false]]],
    ["Team Project Meeting", "Align on the sprint scope and agree on owners for the next milestone.", "Work", "High",  "In Progress", 1, "14:00", []],
    ["Complete Mathematics Practice", "Work through this week's calculus problem set.", "Study", "Medium", "To Do", 2, "18:00", []],
    ["Submit Software Engineering Lab", "Package the project files and upload the lab report.", "Study", "High", "To Do", 3, "16:00", []],
    ["Buy Study Materials", "Pick up the recommended textbook and a few supplies.", "Shopping", "Low", "To Do", 4, "12:00", []],
    ["Morning Workout", "A short strength session and a cooldown walk.", "Health", "Low", "Completed", -1, "07:30", []],
    ["Plan the Weekend", "Block out some time to recharge and catch up with friends.", "Personal", "Low", "Completed", -2, "19:00", []],
    ["Review project notes", "Capture the decisions and action items from the client call.", "Work", "Medium", "Completed", -3, "11:00", []]
  ];
  return examples.map(([title, description, category, priority, status, offset, dueTime, subtasks]) => ({
    id: newId(),
    title,
    description,
    category,
    priority,
    status,
    dueDate: dateOffset(offset),
    dueTime,
    reminder: offset >= 0 ? `${dateOffset(offset)}T${dueTime}` : "",
    subtasks: subtasks.map(([text, done]) => ({ id: newId(), text, done })),
    createdAt: now,
    updatedAt: now
  }));
}

function createUserData() {
  return {
    tasks: sampleTasks(),
    categories: ["Work", "Study", "Personal", "Health", "Shopping", "Other"],
    preferences: {
      theme: "light",
      emailNotifications: true,
      taskReminders: true,
      deadlineNotifications: true
    }
  };
}

function sendError(response, error) {
  const status = error.status || 500;
  if (status >= 500) console.error(error);
  sendJson(response, status, { error: status >= 500 ? "Something went wrong. Please try again." : error.message });
}

async function handleApi(request, response, pathname) {
  const database = readDatabase();
  const method = request.method;

  if (pathname === "/api/register" && method === "POST") {
    const body = await readBody(request);
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (name.length < 2 || name.length > 80) throw Object.assign(new Error("Enter a name between 2 and 80 characters."), { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw Object.assign(new Error("Enter a valid email address."), { status: 400 });
    if (password.length < 8) throw Object.assign(new Error("Your password must be at least 8 characters."), { status: 400 });
    if (database.users.some(user => user.email === email)) throw Object.assign(new Error("An account with this email already exists."), { status: 409 });
    const salt = crypto.randomBytes(16).toString("hex");
    const passwordHash = crypto.scryptSync(password, salt, 64).toString("hex");
    const user = { id: newId(), name, email, salt, passwordHash, ...createUserData() };
    database.users.push(user);
    writeDatabase(database);
    const token = crypto.randomBytes(32).toString("hex");
    sessions.set(token, user.id);
    return sendJson(response, 201, { user: publicUser(user), data: userData(user) }, { "Set-Cookie": sessionCookie(token) });
  }

  if (pathname === "/api/demo" && method === "POST") {
    let user = database.users.find(candidate => candidate.email === "demo@taskflow.local");
    if (!user) {
      const salt = crypto.randomBytes(16).toString("hex");
      user = {
        id: newId(),
        name: "Alex Morgan",
        email: "demo@taskflow.local",
        salt,
        passwordHash: crypto.scryptSync(crypto.randomBytes(32), salt, 64).toString("hex"),
        ...createUserData()
      };
      database.users.push(user);
      writeDatabase(database);
    }
    const token = crypto.randomBytes(32).toString("hex");
    sessions.set(token, user.id);
    return sendJson(response, 200, { user: publicUser(user), data: userData(user) }, { "Set-Cookie": sessionCookie(token) });
  }

  if (pathname === "/api/login" && method === "POST") {
    const body = await readBody(request);
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    const user = database.users.find(candidate => candidate.email === email);
    if (!user || !crypto.timingSafeEqual(
      crypto.scryptSync(password, user.salt, 64),
      Buffer.from(user.passwordHash, "hex")
    )) throw Object.assign(new Error("That email and password don't match. Please try again."), { status: 401 });
    const token = crypto.randomBytes(32).toString("hex");
    sessions.set(token, user.id);
    return sendJson(response, 200, { user: publicUser(user), data: userData(user) }, { "Set-Cookie": sessionCookie(token, body.remember ? undefined : 60 * 60 * 8) });
  }

  if (pathname === "/api/logout" && method === "POST") {
    sessions.delete(cookieValue(request, "taskflow_session"));
    return sendJson(response, 200, { ok: true }, { "Set-Cookie": sessionCookie("", 0) });
  }

  if (pathname === "/api/session" && method === "GET") {
    const user = getUser(request, database);
    return sendJson(response, 200, user ? { user: publicUser(user), data: userData(user) } : { user: null, data: null });
  }

  const user = getUser(request, database);
  if (!user) throw Object.assign(new Error("Please sign in to continue."), { status: 401 });

  if (pathname === "/api/data" && method === "PUT") {
    const body = await readBody(request);
    if (!Array.isArray(body.tasks) || !Array.isArray(body.categories) || !body.preferences || typeof body.preferences !== "object") {
      throw Object.assign(new Error("Task data is incomplete."), { status: 400 });
    }
    user.tasks = body.tasks;
    user.categories = body.categories;
    user.preferences = body.preferences;
    writeDatabase(database);
    return sendJson(response, 200, { ok: true });
  }

  if (pathname === "/api/profile" && method === "PATCH") {
    const body = await readBody(request);
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    if (name.length < 2 || name.length > 80) throw Object.assign(new Error("Enter a name between 2 and 80 characters."), { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw Object.assign(new Error("Enter a valid email address."), { status: 400 });
    if (database.users.some(candidate => candidate.id !== user.id && candidate.email === email)) throw Object.assign(new Error("That email is already in use."), { status: 409 });
    user.name = name;
    user.email = email;
    writeDatabase(database);
    return sendJson(response, 200, { user: publicUser(user) });
  }

  if (pathname === "/api/password" && method === "POST") {
    const body = await readBody(request);
    const oldHash = crypto.scryptSync(String(body.currentPassword || ""), user.salt, 64);
    if (!crypto.timingSafeEqual(oldHash, Buffer.from(user.passwordHash, "hex"))) {
      throw Object.assign(new Error("Your current password is incorrect."), { status: 400 });
    }
    if (String(body.newPassword || "").length < 8) throw Object.assign(new Error("Your new password must be at least 8 characters."), { status: 400 });
    user.salt = crypto.randomBytes(16).toString("hex");
    user.passwordHash = crypto.scryptSync(body.newPassword, user.salt, 64).toString("hex");
    writeDatabase(database);
    return sendJson(response, 200, { ok: true });
  }

  if (pathname === "/api/account" && method === "DELETE") {
    database.users = database.users.filter(candidate => candidate.id !== user.id);
    for (const [token, userId] of sessions) if (userId === user.id) sessions.delete(token);
    writeDatabase(database);
    return sendJson(response, 200, { ok: true }, { "Set-Cookie": sessionCookie("", 0) });
  }

  throw Object.assign(new Error("Endpoint not found."), { status: 404 });
}

function userData(user) {
  return { tasks: user.tasks, categories: user.categories, preferences: user.preferences };
}

const server = http.createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, `http://${request.headers.host || "localhost"}`).pathname;
    if (pathname.startsWith("/api/")) return await handleApi(request, response, pathname);
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" });
      return response.end("Method not allowed");
    }
    const requestedPath = pathname === "/" ? "index.html" : decodeURIComponent(pathname.slice(1));
    const filePath = path.resolve(PUBLIC_DIR, requestedPath);
    if (!filePath.startsWith(`${PUBLIC_DIR}${path.sep}`) && filePath !== path.join(PUBLIC_DIR, "index.html")) {
      response.writeHead(403);
      return response.end("Forbidden");
    }
    fs.readFile(filePath, (error, content) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        return response.end("Not found");
      }
      response.writeHead(200, {
        "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
        "Cache-Control": "no-cache"
      });
      if (request.method === "HEAD") return response.end();
      response.end(content);
    });
  } catch (error) {
    sendError(response, error);
  }
});

server.listen(PORT, () => console.log(`TaskFlow is running at http://localhost:${PORT}`));
