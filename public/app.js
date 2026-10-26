const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.2 2.2L16 9"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r=".8"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.4.8l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.4-.8l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.7l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.4-.8l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.4.8l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.7Z" transform="translate(-1 -1) scale(.91)"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  chevronDown: '<path d="m7 10 5 5 5-5"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  shopping: '<path d="M6 7h12l1 14H5L6 7ZM9 7V5a3 3 0 0 1 6 0v2"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m4 4v7m6-7v7"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a14.8 14.8 0 0 1-3.1 3.8M6.6 6.6C3.6 8.4 2 12 2 12s3.5 7 10 7a10.8 10.8 0 0 0 4-.8"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
  sparkles: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3ZM19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/>',
  arrowDown: '<path d="M12 5v14m-7-7 7 7 7-7"/>',
  checkSmall: '<path d="m5 12 4 4L19 6"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>'
};

const categoryIcons = { Work: "briefcase", Study: "book", Personal: "heart", Health: "activity", Shopping: "shopping", Other: "tag" };
const pageTitles = { dashboard: "Dashboard", tasks: "My Tasks", calendar: "Calendar", categories: "Categories", reminders: "Reminders", settings: "Settings" };
const state = {
  user: null, tasks: [], categories: [], preferences: {}, page: "dashboard",
  authMode: "login", authError: "", authBusy: false, modal: null, popover: null,
  search: "", taskSearch: "", taskTab: "All", statusFilter: "All statuses",
  priorityFilter: "All priorities", categoryFilter: "All categories", sortBy: "due",
  month: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  notificationsRead: false, mobileNavOpen: false
};
const app = document.getElementById("app");

function icon(name, extraClass = "") {
  return `<svg class="icon ${extraClass}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.grid}</svg>`;
}
function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "TF";
}
function todayString(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseLocalDate(value) {
  if (!value) return null;
  const parts = value.slice(0, 10).split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
function formatDate(value, options = { month: "short", day: "numeric" }) {
  const date = parseLocalDate(value);
  return date ? new Intl.DateTimeFormat(undefined, options).format(date) : "No due date";
}
function prettyTime(value) {
  if (!value) return "No time set";
  const [hours, minutes] = value.split(":").map(Number);
  return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(new Date(2000, 0, 1, hours, minutes));
}
function prettyReminder(value) {
  if (!value) return "No reminder";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "No reminder";
  return `${formatDate(todayString(date), { month: "short", day: "numeric" })}, ${prettyTime(`${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`)}`;
}
function humanDate(value) {
  if (!value) return "No due date";
  const today = todayString();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = todayString(tomorrow);
  if (value === today) return "Today";
  if (value === tomorrowStr) return "Tomorrow";
  return formatDate(value, { weekday: "short", month: "short", day: "numeric" });
}
function taskIsOverdue(task) {
  return task.status !== "Completed" && task.dueDate && task.dueDate < todayString();
}
function taskStatus(task) {
  return task.status === "Completed" ? "Completed" : taskIsOverdue(task) ? "Overdue" : task.status;
}
function statusBadge(task) {
  const status = taskStatus(task);
  const cssClass = status === "To Do" ? "todo" : status.toLowerCase().replace(/\s+/g, "-");
  return `<span class="badge status-${cssClass}">${escapeHtml(status)}</span>`;
}
function priorityBadge(priority) {
  return `<span class="badge priority-${String(priority || "Low").toLowerCase()}">${escapeHtml(priority || "Low")}</span>`;
}
function categoryPill(category) {
  return `<span class="category-pill"><i class="category-dot" data-category="${escapeHtml(category)}"></i>${escapeHtml(category || "Other")}</span>`;
}
function dateAtDayOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return todayString(date);
}
function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
}
function escapeSelector(value) {
  return window.CSS && CSS.escape ? CSS.escape(value) : String(value).replace(/["\\]/g, "\\$&");
}

async function api(url, options = {}) {
  const response = await fetch(url, {
    credentials: "same-origin",
    ...options,
    headers: { ...(options.body ? { "Content-Type": "application/json" } : {}), ...(options.headers || {}) }
  });
  let result = {};
  try { result = await response.json(); } catch { /* An empty API response is reported below. */ }
  if (!response.ok) throw new Error(result.error || `Request failed (${response.status}).`);
  return result;
}

function restoreFocus(callback) {
  const active = document.activeElement;
  const key = active?.dataset?.focus;
  const selection = active && typeof active.selectionStart === "number" ? active.selectionStart : null;
  callback();
  if (key) {
    const target = app.querySelector(`[data-focus="${escapeSelector(key)}"]`);
    if (target) {
      target.focus({ preventScroll: true });
      if (selection !== null && typeof target.setSelectionRange === "function") target.setSelectionRange(selection, selection);
    }
  }
}

function toast(message, error = false) {
  const region = document.getElementById("toast-region");
  const element = document.createElement("div");
  element.className = `toast${error ? " error" : ""}`;
  element.innerHTML = `${icon(error ? "close" : "checkCircle")}<span>${escapeHtml(message)}</span>`;
  region.append(element);
  window.setTimeout(() => element.remove(), 3400);
}

function setTheme() {
  document.documentElement.dataset.theme = state.preferences.theme === "dark" ? "dark" : "light";
}

function render() {
  setTheme();
  if (!state.user) {
    app.innerHTML = renderAuth();
    return;
  }
  app.innerHTML = renderApp();
}

function renderAuth() {
  const register = state.authMode === "register";
  return `<main class="auth-shell">
    <section class="auth-story">
      <a class="brand" href="#" aria-label="TaskFlow home"><span class="brand-mark">${icon("check")}</span><span class="brand-name">TaskFlow</span></a>
      <div class="story-content">
        <p class="eyebrow">A calmer way to get things done</p>
        <h1>Organize your work. Achieve more.</h1>
        <p>Bring your tasks, deadlines, and ideas together. Spend less time keeping track and more time doing work that matters.</p>
        <div class="story-visual" aria-hidden="true">
          <div class="story-visual-top"><span>This week, at a glance</span><span class="mini-dots"><i></i><i></i><i></i></span></div>
          <div class="story-task done"><span class="mini-check">${icon("checkSmall", "icon-sm")}</span><span>Review project brief</span><span class="story-tag">Work</span></div>
          <div class="story-task"><span class="mini-check"></span><span>Prepare for the big presentation</span><span class="story-tag">Today</span></div>
          <div class="story-task"><span class="mini-check"></span><span>Make time for a proper break</span><span class="story-tag">Personal</span></div>
        </div>
      </div>
      <div class="story-footer">A little more focus. A lot more forward.</div>
    </section>
    <section class="auth-panel">
      <div class="auth-card">
        <a class="brand auth-mobile-brand" href="#" aria-label="TaskFlow home"><span class="brand-mark">${icon("check")}</span><span class="brand-name">TaskFlow</span></a>
        <div class="auth-heading"><p class="eyebrow">${register ? "Get started for free" : "Welcome back"}</p><h2>${register ? "Create your account" : "Sign in to TaskFlow"}</h2><p>${register ? "A more organized day starts with a few small steps." : "Pick up right where you left off."}</p></div>
        ${state.authError ? `<div class="auth-error" role="alert">${escapeHtml(state.authError)}</div>` : ""}
        <form id="auth-form" novalidate>
          ${register ? `<div class="field"><label for="auth-name">Full name</label><div class="input-wrap">${icon("user")}<input class="input" id="auth-name" name="name" autocomplete="name" placeholder="Your name" required minlength="2"></div></div>` : ""}
          <div class="field"><label for="auth-email">Email address</label><div class="input-wrap">${icon("mail")}<input class="input" id="auth-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required></div></div>
          <div class="field"><label for="auth-password">Password</label><div class="input-wrap">${icon("lock")}<input class="input" id="auth-password" name="password" type="password" autocomplete="${register ? "new-password" : "current-password"}" placeholder="${register ? "At least 8 characters" : "Enter your password"}" required ${register ? "minlength=\"8\"" : ""}><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Show password">${icon("eye", "icon-sm")}</button></div></div>
          ${register ? `<div class="field"><label for="auth-confirm">Confirm password</label><div class="input-wrap">${icon("lock")}<input class="input" id="auth-confirm" name="confirm" type="password" autocomplete="new-password" placeholder="Re-enter your password" required><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Show password">${icon("eye", "icon-sm")}</button></div></div>` : `<div class="auth-options"><label class="check-label"><input type="checkbox" name="remember" checked>Remember me</label><button class="text-button" type="button" data-action="forgot-password">Forgot password?</button></div>`}
          <button class="btn btn-primary btn-block" type="submit" ${state.authBusy ? "disabled" : ""}>${state.authBusy ? "Please wait…" : register ? "Create account" : "Sign in"}${icon("chevronRight", "icon-sm")}</button>
        </form>
        ${!register ? `<div class="auth-demo-divider"><span>or take a look around</span></div><button class="btn btn-secondary btn-block auth-demo-button" type="button" data-action="demo-login" ${state.authBusy ? "disabled" : ""}>${icon("sparkles", "icon-sm")}Explore the demo workspace</button><p class="auth-demo-note">No sign-up needed. Sample tasks are included.</p>` : ""}
        <p class="auth-switch">${register ? "Already have an account?" : "New to TaskFlow?"} <button class="text-button" type="button" data-action="switch-auth">${register ? "Sign in" : "Create an account"}</button></p>
      </div>
    </section>
  </main>`;
}

const navItems = [
  ["dashboard", "grid", "Dashboard"],
  ["tasks", "checkCircle", "My Tasks"],
  ["calendar", "calendar", "Calendar"],
  ["categories", "tag", "Categories"],
  ["reminders", "bell", "Reminders"]
];

function renderApp() {
  const tasksLeft = state.tasks.filter(task => task.status !== "Completed").length;
  return `<div class="app-shell">
    <aside class="sidebar${state.mobileNavOpen ? " open" : ""}" aria-label="Main navigation">
      <a class="brand" href="#" data-nav="dashboard"><span class="brand-mark">${icon("check")}</span><span class="brand-name">TaskFlow</span></a>
      <p class="nav-label">Workspace</p>
      <nav class="nav-list">${navItems.map(([page, iconName, label]) => `<button class="nav-item${state.page === page ? " active" : ""}" data-nav="${page}">${icon(iconName)}<span>${label}</span>${page === "tasks" ? `<span class="nav-count">${tasksLeft}</span>` : ""}</button>`).join("")}</nav>
      <p class="nav-label">Personal</p>
      <nav class="nav-list"><button class="nav-item${state.page === "settings" ? " active" : ""}" data-nav="settings">${icon("settings")}<span>Settings</span></button></nav>
      <div class="sidebar-spacer"></div>
      <div class="sidebar-divider"></div>
      <div class="sidebar-profile"><span class="avatar">${escapeHtml(initials(state.user.name))}</span><div class="profile-copy"><strong>${escapeHtml(state.user.name)}</strong><span>Personal workspace</span></div></div>
      <button class="nav-item sidebar-logout" data-action="logout">${icon("logout")}<span>Sign out</span></button>
    </aside>
    <button class="mobile-backdrop${state.mobileNavOpen ? " open" : ""}" data-action="close-mobile-nav" aria-label="Close navigation"></button>
    <div class="main-area">
      <header class="topbar">
        <div class="topbar-title"><button class="icon-button menu-toggle" data-action="toggle-mobile-nav" aria-label="Open navigation">${icon("menu")}</button><h1>${pageTitles[state.page]}</h1></div>
        <div class="topbar-right">
          <div class="global-search">${icon("search")}<input type="search" value="${escapeHtml(state.search)}" placeholder="Search anything..." aria-label="Search tasks" data-focus="global-search" data-search="global"><span class="shortcut">⌘ K</span>${state.search ? renderSearchResults() : ""}</div>
          <div class="popover-anchor"><button class="icon-button" data-action="notifications" aria-label="Notifications">${icon("bell")}${!state.notificationsRead ? '<span class="notification-dot"></span>' : ""}</button>${state.popover === "notifications" ? renderNotifications() : ""}</div>
          <div class="popover-anchor"><button class="header-avatar" data-action="profile-menu" aria-label="Open profile menu"><span class="avatar">${escapeHtml(initials(state.user.name))}</span><span class="profile-copy"><strong>${escapeHtml(state.user.name)}</strong><span>Personal account</span></span>${icon("chevronDown", "icon-sm chevron")}</button>${state.popover === "profile" ? renderProfileMenu() : ""}</div>
        </div>
      </header>
      <main class="page-content">${renderPage()}</main>
    </div>
    ${state.modal ? renderModal() : ""}
  </div>`;
}

function renderPage() {
  switch (state.page) {
    case "tasks": return renderTasksPage();
    case "calendar": return renderCalendarPage();
    case "categories": return renderCategoriesPage();
    case "reminders": return renderRemindersPage();
    case "settings": return renderSettingsPage();
    default: return renderDashboard();
  }
}

function renderPageHeading(title, description, action = "") {
  return `<div class="page-heading"><div><h2>${title}</h2><p>${description}</p></div>${action}</div>`;
}

function renderDashboard() {
  const total = state.tasks.length;
  const complete = state.tasks.filter(task => task.status === "Completed").length;
  const inProgress = state.tasks.filter(task => task.status === "In Progress").length;
  const overdue = state.tasks.filter(task => taskIsOverdue(task)).length;
  const percent = total ? Math.round(complete / total * 100) : 0;
  const recent = [...state.tasks].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 5);
  const upcoming = state.tasks.filter(task => task.status !== "Completed" && task.dueDate >= todayString()).sort((a, b) => `${a.dueDate} ${a.dueTime}`.localeCompare(`${b.dueDate} ${b.dueTime}`)).slice(0, 4);
  const weekStart = new Date();
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  const completedThisWeek = state.tasks.filter(task => task.status === "Completed" && new Date(task.updatedAt) >= weekStart).length;
  const createdThisWeek = state.tasks.filter(task => new Date(task.createdAt) >= weekStart).length;
  const categoryStats = state.categories.map(category => ({ name: category, count: state.tasks.filter(task => task.category === category).length })).filter(item => item.count).sort((a, b) => b.count - a.count).slice(0, 5);
  const biggest = Math.max(1, ...categoryStats.map(item => item.count));
  return `<section class="welcome"><div><p class="eyebrow">Your day, in focus</p><h2>${greeting()}, ${escapeHtml(state.user.name.split(" ")[0])} <span class="faint">—</span> here's your focus for today.</h2><p>One thing at a time. You're making good progress.</p></div><button class="btn btn-primary" data-action="new-task">${icon("plus")}Create new task</button></section>
    <div class="stats-grid">
      ${statCard("Total tasks", total, "grid", "", `${total === 1 ? "item" : "items"} in your list`)}
      ${statCard("In progress", inProgress, "clock", "orange", inProgress ? "Keep the momentum going" : "Nothing in progress")}
      ${statCard("Completed", complete, "checkCircle", "green", completedThisWeek ? `${completedThisWeek} completed this week` : "Ready for a win?")}
      ${statCard("Overdue", overdue, "calendar", "red", overdue ? "Needs your attention" : "You're all caught up")}
    </div>
    <div class="dashboard-grid">
      <div class="dashboard-main">
        <section class="card progress-card"><div><div class="card-title-row"><div><h3>Your progress</h3><p>A little progress adds up.</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div><div class="progress-meta"><span>${complete} of ${total} tasks completed</span><span>${percent}%</span></div><div class="weekly-row">${icon("arrowUpRight", "icon-sm")}<span>${completedThisWeek} completed this week · ${createdThisWeek} added this week</span></div></div><div class="progress-ring" style="--progress:${percent}"><div class="progress-ring-copy"><strong>${percent}%</strong><span>complete</span></div></div></section>
        <section class="card"><div class="card-title-row"><div><h3>Recent tasks</h3><p>Your latest updates, all in one place.</p></div><button class="link-button" data-nav="tasks">View all ${icon("chevronRight", "icon-sm")}</button></div>
          ${recent.length ? `<div class="task-list">${recent.map(task => dashboardTask(task)).join("")}</div>` : emptyState("list", "Nothing on your list yet", "Create your first task to start building momentum.")}</section>
      </div>
      <div class="dashboard-side">
        <section class="card"><div class="card-title-row"><div><h3>Upcoming deadlines</h3><p>The next few things on your plate.</p></div><button class="link-button" data-nav="calendar">Calendar ${icon("chevronRight", "icon-sm")}</button></div>
          ${upcoming.length ? upcoming.map(deadlineItem).join("") : emptyState("calendar", "Clear skies ahead", "No upcoming deadlines. Enjoy the breathing room.")}</section>
        <section class="card"><div class="card-title-row"><div><h3>Categories</h3><p>A quick look at where your time goes.</p></div><button class="link-button" data-nav="categories">Manage</button></div>
          ${categoryStats.length ? `<div class="category-list">${categoryStats.map(item => `<div><div class="category-line-top"><strong>${categoryPill(item.name)}</strong><span>${item.count} task${item.count === 1 ? "" : "s"}</span></div><div class="category-progress"><span style="width:${Math.max(8, Math.round(item.count / biggest * 100))}%"></span></div></div>`).join("")}</div>` : emptyState("tag", "Your categories will show here", "Add tasks to see your work organized by category.")}</section>
      </div>
    </div>`;
}

function statCard(label, number, iconName, color, note) {
  return `<article class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon ${color}">${icon(iconName, "icon-sm")}</span></div><div class="stat-value">${number}<span class="stat-note">${escapeHtml(note)}</span></div></article>`;
}

function dashboardTask(task) {
  const complete = task.status === "Completed";
  return `<div class="task-row${complete ? " is-complete" : ""}"><input class="task-check" type="checkbox" data-action="toggle-task" data-id="${task.id}" ${complete ? "checked" : ""} aria-label="Mark ${escapeHtml(task.title)} completed"><div class="task-row-main"><div class="task-row-title"><button data-action="task-detail" data-id="${task.id}">${escapeHtml(task.title)}</button></div><div class="task-row-meta">${categoryPill(task.category)}<span>${humanDate(task.dueDate)}</span></div></div><div class="task-row-side">${priorityBadge(task.priority)}${statusBadge(task)}</div></div>`;
}

function deadlineItem(task) {
  const date = parseLocalDate(task.dueDate);
  return `<div class="deadline-item"><div class="date-tile"><strong>${date ? date.getDate() : "—"}</strong><span>${date ? new Intl.DateTimeFormat(undefined, { month: "short" }).format(date) : ""}</span></div><div class="deadline-copy"><strong>${escapeHtml(task.title)}</strong><span>${escapeHtml(humanDate(task.dueDate))} · ${prettyTime(task.dueTime)}</span></div>${priorityBadge(task.priority)}</div>`;
}

function emptyState(iconName, title, description) {
  return `<div class="empty-state"><span class="empty-icon">${icon(iconName)}</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(description)}</p></div>`;
}

function filteredTasks() {
  const query = state.taskSearch.trim().toLowerCase();
  const filtered = state.tasks.filter(task => {
    const matchesSearch = !query || `${task.title} ${task.description} ${task.category}`.toLowerCase().includes(query);
    const status = taskStatus(task);
    const matchesTab = state.taskTab === "All" || (state.taskTab === "To Do" ? task.status === "To Do" || status === "Overdue" : status === state.taskTab);
    const matchesStatus = state.statusFilter === "All statuses" || status === state.statusFilter;
    const matchesPriority = state.priorityFilter === "All priorities" || task.priority === state.priorityFilter;
    const matchesCategory = state.categoryFilter === "All categories" || task.category === state.categoryFilter;
    return matchesSearch && matchesTab && matchesStatus && matchesPriority && matchesCategory;
  });
  const priorityOrder = { High: 0, Medium: 1, Low: 2 };
  return filtered.sort((a, b) => state.sortBy === "priority"
    ? priorityOrder[a.priority] - priorityOrder[b.priority] || a.dueDate.localeCompare(b.dueDate)
    : (a.dueDate || "9999").localeCompare(b.dueDate || "9999") || (a.dueTime || "").localeCompare(b.dueTime || ""));
}

function renderTasksPage() {
  const list = filteredTasks();
  const action = `<button class="btn btn-primary" data-action="new-task">${icon("plus")}Create new task</button>`;
  const filterOptions = (allLabel, values, selected) => `<select class="select" data-filter="${allLabel}" aria-label="${allLabel}">${[allLabel, ...values].map(value => `<option ${selected === value ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select>`;
  const tabs = ["All", "To Do", "In Progress", "Completed"];
  const countForTab = tab => tab === "All" ? state.tasks.length : tab === "To Do" ? state.tasks.filter(task => task.status === "To Do" || taskIsOverdue(task)).length : state.tasks.filter(task => task.status === tab).length;
  return `${renderPageHeading("My Tasks", "A clear view of what needs doing, and what's already done.", action)}
    <section class="card">
      <div class="task-toolbar"><div class="global-search">${icon("search")}<input class="input" type="search" value="${escapeHtml(state.taskSearch)}" placeholder="Search your tasks..." aria-label="Search tasks" data-focus="task-search" data-search="tasks"></div>
        ${filterOptions("All statuses", ["To Do", "In Progress", "Completed", "Overdue"], state.statusFilter)}
        ${filterOptions("All priorities", ["High", "Medium", "Low"], state.priorityFilter)}
        ${filterOptions("All categories", state.categories, state.categoryFilter)}
        <select class="select" data-filter="sort" aria-label="Sort tasks"><option value="due" ${state.sortBy === "due" ? "selected" : ""}>Sort: Due date</option><option value="priority" ${state.sortBy === "priority" ? "selected" : ""}>Sort: Priority</option></select>
      </div>
      <div class="task-tabs">${tabs.map(tab => `<button class="task-tab${state.taskTab === tab ? " active" : ""}" data-tab="${tab}">${tab}<span class="tab-count">${countForTab(tab)}</span></button>`).join("")}<span class="filter-count">${list.length} shown</span></div>
      ${list.length ? `<div class="management-list">${list.map(managementTask).join("")}</div>` : emptyState("search", "No tasks found", "Try another search or adjust the filters.")}</section>`;
}

function managementTask(task) {
  const complete = task.status === "Completed";
  const subtaskDone = task.subtasks.filter(item => item.done).length;
  const subtaskCount = task.subtasks.length;
  return `<article class="management-task${complete ? " is-complete" : ""}">
    <input class="task-check" type="checkbox" data-action="toggle-task" data-id="${task.id}" ${complete ? "checked" : ""} aria-label="Complete ${escapeHtml(task.title)}">
    <div class="management-content"><button class="management-title" data-action="task-detail" data-id="${task.id}">${escapeHtml(task.title)}</button>
      ${task.description ? `<p class="management-description">${escapeHtml(task.description)}</p>` : ""}
      <div class="management-meta">${categoryPill(task.category)}${priorityBadge(task.priority)}${statusBadge(task)}<span class="task-reminder">${icon("calendar", "icon-sm")}${escapeHtml(humanDate(task.dueDate))} · ${prettyTime(task.dueTime)}</span>${task.reminder ? `<span class="task-reminder">${icon("bell", "icon-sm")}${escapeHtml(prettyReminder(task.reminder))}</span>` : ""}</div>
      ${subtaskCount ? `<div class="inline-subtasks">${subtaskDone} of ${subtaskCount} subtasks complete</div>` : ""}
    </div>
    <div class="management-actions"><button class="icon-button" data-action="edit-task" data-id="${task.id}" aria-label="Edit ${escapeHtml(task.title)}">${icon("edit", "icon-sm")}</button><button class="icon-button" data-action="delete-task" data-id="${task.id}" aria-label="Delete ${escapeHtml(task.title)}">${icon("trash", "icon-sm")}</button></div>
  </article>`;
}

function renderCalendarPage() {
  const year = state.month.getFullYear();
  const month = state.month.getMonth();
  const monthName = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(state.month);
  const firstDay = new Date(year, month, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(year, month, 1 - mondayOffset);
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const key = todayString(date);
    const matches = state.tasks.filter(task => task.dueDate === key);
    const classes = ["calendar-day", date.getMonth() !== month ? "outside" : "", key === todayString() ? "today" : ""].filter(Boolean).join(" ");
    return `<div class="${classes}" data-action="calendar-day" data-date="${key}" role="button" tabindex="0" aria-label="${new Intl.DateTimeFormat(undefined, { dateStyle: "full" }).format(date)}">
      <span class="calendar-day-number">${date.getDate()}</span>${matches.slice(0, 3).map(task => `<button class="calendar-event ${task.priority.toLowerCase()}" data-action="task-detail" data-id="${task.id}" title="${escapeHtml(task.title)}">${escapeHtml(task.title)}</button>`).join("")}${matches.length > 3 ? `<span class="calendar-more">+${matches.length - 3} more</span>` : ""}
    </div>`;
  });
  return `${renderPageHeading("Calendar", "A month at a glance, with your deadlines in view.", `<button class="btn btn-primary" data-action="new-task">${icon("plus")}Create new task</button>`)}
    <section class="card calendar-card"><div class="card-title-row"><div><h3>Plan your month</h3><p>Choose a day to add a task, or select an existing task to view its details.</p></div><div class="calendar-controls"><button class="icon-button" data-action="previous-month" aria-label="Previous month">${icon("chevronLeft")}</button><h3 class="calendar-month">${monthName}</h3><button class="icon-button" data-action="next-month" aria-label="Next month">${icon("chevronRight")}</button><button class="btn btn-secondary" data-action="today">Today</button></div></div>
      <div class="calendar-grid">${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => `<div class="calendar-weekday">${day}</div>`).join("")}${days.join("")}</div>
      <div class="weekly-row">${priorityBadge("High")}<span>High priority</span>${priorityBadge("Medium")}<span>Medium priority</span>${priorityBadge("Low")}<span>Low priority</span></div>
    </section>`;
}

function renderCategoriesPage() {
  const categoryColors = { Work: "briefcase", Study: "book", Personal: "heart", Health: "activity", Shopping: "shopping", Other: "tag" };
  const cards = state.categories.map(category => {
    const tasks = state.tasks.filter(task => task.category === category);
    const complete = tasks.filter(task => task.status === "Completed").length;
    const percent = tasks.length ? Math.round(complete / tasks.length * 100) : 0;
    return `<article class="card category-card"><div class="category-card-head"><span class="category-symbol">${icon(categoryColors[category] || "tag")}</span><div class="management-actions"><button class="icon-button" data-action="edit-category" data-category="${escapeHtml(category)}" aria-label="Edit ${escapeHtml(category)}">${icon("edit", "icon-sm")}</button><button class="icon-button" data-action="delete-category" data-category="${escapeHtml(category)}" aria-label="Delete ${escapeHtml(category)}">${icon("trash", "icon-sm")}</button></div></div><h3>${escapeHtml(category)}</h3><span class="category-count">${tasks.length} task${tasks.length === 1 ? "" : "s"} · ${complete} completed</span><div class="category-progress"><span style="width:${percent}%"></span></div><div class="category-foot"><span>Progress</span><strong>${percent}%</strong></div></article>`;
  });
  return `${renderPageHeading("Categories", "Give your tasks a little structure. Keep each part of life in its place.", `<button class="btn btn-primary" data-action="new-category">${icon("plus")}Add category</button>`)}
    ${cards.length ? `<div class="category-grid">${cards.join("")}</div>` : emptyState("tag", "No categories yet", "Create a category to start organizing your tasks.")}`;
}

function renderRemindersPage() {
  const dated = state.tasks.filter(task => task.reminder && task.status !== "Completed").map(task => ({ ...task, reminderAt: new Date(task.reminder) })).filter(task => !Number.isNaN(task.reminderAt.getTime())).sort((a, b) => a.reminderAt - b.reminderAt);
  const groups = [
    ["Today", dated.filter(task => todayString(task.reminderAt) === todayString())],
    ["Tomorrow", dated.filter(task => todayString(task.reminderAt) === dateAtDayOffset(1))],
    ["Upcoming", dated.filter(task => todayString(task.reminderAt) > dateAtDayOffset(1))]
  ];
  const groupMarkup = groups.map(([label, tasks]) => `<section class="reminder-section"><h3 class="section-label">${label}<span class="count-chip">${tasks.length}</span></h3>${tasks.length ? tasks.map(task => reminderCard(task, label === "Today")).join("") : `<div class="card"><p class="muted" style="margin:0;font-size:10px">No reminders ${label === "Today" ? "for today" : label === "Tomorrow" ? "for tomorrow" : "coming up"}.</p></div>`}</section>`).join("");
  return `${renderPageHeading("Reminders", "A gentle nudge at the right moment can make all the difference.", `<button class="btn btn-primary" data-action="new-task">${icon("plus")}Create new task</button>`)}${groupMarkup}`;
}

function reminderCard(task, urgent) {
  return `<article class="reminder-card"><span class="reminder-icon${urgent && task.priority === "High" ? " urgent" : ""}">${icon("bell")}</span><div class="reminder-detail"><strong>${escapeHtml(task.title)}</strong><span>${formatDate(todayString(task.reminderAt), { weekday: "short", month: "short", day: "numeric" })} at ${prettyTime(`${String(task.reminderAt.getHours()).padStart(2, "0")}:${String(task.reminderAt.getMinutes()).padStart(2, "0")}`)} · ${categoryPill(task.category)}</span></div><div class="reminder-side">${priorityBadge(task.priority)}${statusBadge(task)}</div></article>`;
}

function renderSettingsPage() {
  const prefs = state.preferences;
  const preference = (key, title, description) => `<div class="preference-row"><div class="preference-copy"><strong>${title}</strong><span>${description}</span></div><button class="switch${prefs[key] ? " on" : ""}" data-action="toggle-preference" data-key="${key}" role="switch" aria-checked="${!!prefs[key]}" aria-label="${title}"></button></div>`;
  return `${renderPageHeading("Settings", "Make TaskFlow feel a little more like yours.", "")}
    <div class="settings-grid"><div class="settings-column">
      <section class="card settings-section"><h3>Profile</h3><p>Your name and email used across your workspace.</p><div class="profile-photo-row"><span class="avatar">${escapeHtml(initials(state.user.name))}</span><div><strong style="display:block;font-size:11px">${escapeHtml(state.user.name)}</strong><span class="muted" style="display:block;margin-top:4px;font-size:10px">Your TaskFlow profile</span></div></div><form id="profile-form"><div class="settings-form-row"><div class="field"><label for="profile-name">Full name</label><input id="profile-name" name="name" class="input" value="${escapeHtml(state.user.name)}" required minlength="2"></div><div class="field"><label for="profile-email">Email address</label><input id="profile-email" name="email" class="input" type="email" value="${escapeHtml(state.user.email)}" required></div></div><button class="btn btn-primary" type="submit">Save changes</button></form></section>
      <section class="card settings-section"><h3>Preferences</h3><p>Choose when TaskFlow gives you a little nudge.</p>${preference("emailNotifications", "Email notifications", "Updates about your account and weekly activity.")}${preference("taskReminders", "Task reminders", "A nudge when a task reminder is due.")}${preference("deadlineNotifications", "Deadline notifications", "Alerts when upcoming deadlines are getting close.")}</section>
    </div><div class="settings-column">
      <section class="card settings-section"><h3>Appearance</h3><p>Make yourself at home with a theme that works for you.</p>${preference("darkMode", "Dark appearance", "A softer look for evenings and low-light spaces.")}</section>
      <section class="card settings-section"><h3>Account</h3><p>Keep your account safe and up to date.</p><div class="account-actions"><button class="btn btn-secondary" data-action="change-password">${icon("lock", "icon-sm")}Change password</button><button class="btn btn-secondary" data-action="logout">${icon("logout", "icon-sm")}Sign out</button></div></section>
      <section class="card settings-section danger-zone"><h3>Delete account</h3><p>Permanently remove your account and all of its task data.</p><button class="btn btn-danger" data-action="delete-account">${icon("trash", "icon-sm")}Delete my account</button></section>
    </div></div>`;
}

function renderSearchResults() {
  const query = state.search.trim().toLowerCase();
  if (!query) return "";
  const matches = state.tasks.filter(task => `${task.title} ${task.description} ${task.category}`.toLowerCase().includes(query)).slice(0, 6);
  return `<div class="search-results"><div class="search-results-head">Tasks${matches.length ? ` · ${matches.length} found` : ""}</div>${matches.length ? matches.map(task => `<button class="search-result" data-action="search-open-task" data-id="${task.id}"><span class="category-symbol" style="width:29px;height:29px">${icon(categoryIcons[task.category] || "tag", "icon-sm")}</span><span style="min-width:0"><strong>${escapeHtml(task.title)}</strong><span>${escapeHtml(task.category)} · ${escapeHtml(humanDate(task.dueDate))}</span></span></button>`).join("") : `<div class="search-results-head">No matching tasks</div>`}</div>`;
}

function renderNotifications() {
  const upcoming = state.tasks.filter(task => task.status !== "Completed" && task.dueDate >= todayString()).sort((a, b) => a.dueDate.localeCompare(b.dueDate)).slice(0, 2);
  const completed = state.tasks.filter(task => task.status === "Completed").length;
  const items = [
    ...upcoming.map(task => ({ icon: "calendar", text: `${task.title} is due ${humanDate(task.dueDate).toLowerCase()}.`, time: "Upcoming deadline" })),
    ...(completed ? [{ icon: "checkCircle", text: `${completed} ${completed === 1 ? "task has" : "tasks have"} been completed. Nice work.`, time: "Your progress" }] : [])
  ].slice(0, 3);
  return `<div class="popover"><div class="popover-head"><strong>Notifications</strong><button class="text-button" data-action="mark-notifications-read">${state.notificationsRead ? "All caught up" : "Mark as read"}</button></div><div class="popover-list">${items.map(item => `<div class="notification-item"><span class="notification-icon">${icon(item.icon, "icon-sm")}</span><div><strong>${escapeHtml(item.text)}</strong><span>${escapeHtml(item.time)}</span></div></div>`).join("")}</div></div>`;
}

function renderProfileMenu() {
  return `<div class="popover profile-menu"><div class="profile-menu-info"><strong>${escapeHtml(state.user.name)}</strong><span>${escapeHtml(state.user.email)}</span></div><button class="menu-option" data-nav="settings">${icon("user", "icon-sm")}Profile settings</button><button class="menu-option" data-action="toggle-theme">${icon(state.preferences.theme === "dark" ? "sun" : "moon", "icon-sm")}Switch to ${state.preferences.theme === "dark" ? "light" : "dark"} mode</button><button class="menu-option danger" data-action="logout">${icon("logout", "icon-sm")}Sign out</button></div>`;
}

function renderModal() {
  const modal = state.modal;
  if (modal.type === "task") return renderTaskModal(modal);
  if (modal.type === "category") return renderCategoryModal(modal);
  if (modal.type === "detail") return renderDetailModal(modal.task);
  if (modal.type === "password") return renderPasswordModal();
  if (modal.type === "confirm") return renderConfirmModal(modal);
  if (modal.type === "forgot") return renderForgotModal();
  return "";
}

function renderTaskModal(modal) {
  const task = modal.draft || modal.task || {};
  const subtasks = modal.subtasks;
  const categoryOptions = [...new Set([...state.categories, task.category].filter(Boolean))];
  return `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="task-modal-title"><form id="task-form" novalidate>
    <div class="modal-header"><div><h2 id="task-modal-title">${modal.task ? "Edit task" : "Create new task"}</h2><p>A few details now can help future you stay on track.</p></div><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div>
    <div class="modal-body">
      <div class="field"><label for="task-title">Task title</label><input class="input" id="task-title" name="title" required maxlength="120" placeholder="What needs to get done?" value="${escapeHtml(task.title || "")}"></div>
      <div class="field"><label for="task-description">Description <span class="muted">(optional)</span></label><textarea class="textarea" id="task-description" name="description" maxlength="1000" placeholder="Add a few details or notes...">${escapeHtml(task.description || "")}</textarea></div>
      <div class="modal-grid"><div class="field"><label for="task-category">Category</label><select class="select" id="task-category" name="category">${categoryOptions.map(category => `<option ${category === (task.category || state.categories[0] || "Other") ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select></div>
        <div class="field"><label for="task-priority">Priority</label><select class="select" id="task-priority" name="priority">${["Low", "Medium", "High"].map(priority => `<option ${priority === (task.priority || "Medium") ? "selected" : ""}>${priority}</option>`).join("")}</select></div>
        <div class="field"><label for="task-due-date">Due date</label><input class="input" id="task-due-date" name="dueDate" type="date" value="${escapeHtml(task.dueDate || modal.date || "")}"></div>
        <div class="field"><label for="task-due-time">Due time</label><input class="input" id="task-due-time" name="dueTime" type="time" value="${escapeHtml(task.dueTime || "")}"></div>
        <div class="field"><label for="task-status">Status</label><select class="select" id="task-status" name="status">${["To Do", "In Progress", "Completed"].map(status => `<option ${status === (task.status || "To Do") ? "selected" : ""}>${status}</option>`).join("")}</select></div>
        <div class="field"><label for="task-reminder">Reminder <span class="muted">(optional)</span></label><input class="input" id="task-reminder" name="reminder" type="datetime-local" value="${escapeHtml(task.reminder || "")}"></div>
      </div>
      <div class="field" style="margin-top:15px"><label>Subtasks</label><div class="subtask-editor">${subtasks.map((subtask, index) => `<div class="subtask-edit-row"><input class="input" aria-label="Subtask ${index + 1}" data-subtask-index="${index}" value="${escapeHtml(subtask.text)}" placeholder="Add a subtask..."><button class="icon-button" type="button" data-action="remove-subtask" data-index="${index}" aria-label="Remove subtask">${icon("close", "icon-sm")}</button></div>`).join("")}</div><button class="link-button add-subtask" type="button" data-action="add-subtask">${icon("plus", "icon-sm")}Add a subtask</button></div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn btn-primary" type="submit">${icon("check", "icon-sm")}${modal.task ? "Save changes" : "Save task"}</button></div>
  </form></section></div>`;
}

function renderCategoryModal(modal) {
  return `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal small" role="dialog" aria-modal="true" aria-labelledby="category-modal-title"><form id="category-form"><div class="modal-header"><div><h2 id="category-modal-title">${modal.category ? "Edit category" : "Add category"}</h2><p>Keep your tasks organized in a way that works for you.</p></div><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div><div class="modal-body"><div class="field"><label for="category-name">Category name</label><input class="input" id="category-name" name="name" required maxlength="32" value="${escapeHtml(modal.category || "")}" placeholder="e.g. Freelance"></div></div><div class="modal-footer"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn btn-primary" type="submit">${modal.category ? "Save changes" : "Add category"}</button></div></form></section></div>`;
}

function renderDetailModal(task) {
  if (!task) return "";
  const done = task.subtasks.filter(item => item.done).length;
  return `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal small" role="dialog" aria-modal="true" aria-labelledby="detail-title"><div class="modal-header"><div><p class="eyebrow">${categoryPill(task.category)}</p><h2 id="detail-title">${escapeHtml(task.title)}</h2></div><button class="icon-button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div><div class="modal-body">
    ${task.description ? `<p class="detail-description">${escapeHtml(task.description)}</p>` : `<p class="detail-description muted">No description added.</p>`}
    <div class="detail-grid"><div class="detail-cell"><span>Priority</span><strong>${priorityBadge(task.priority)}</strong></div><div class="detail-cell"><span>Status</span><strong>${statusBadge(task)}</strong></div><div class="detail-cell"><span>Due date</span><strong>${escapeHtml(humanDate(task.dueDate))} · ${prettyTime(task.dueTime)}</strong></div><div class="detail-cell"><span>Reminder</span><strong>${escapeHtml(prettyReminder(task.reminder))}</strong></div></div>
    ${task.subtasks.length ? `<div class="card-title-row"><h3>Subtasks · ${done}/${task.subtasks.length}</h3></div>${task.subtasks.map((item, index) => `<label class="detail-subtask${item.done ? " done" : ""}"><input class="task-check" type="checkbox" data-action="toggle-subtask-detail" data-id="${task.id}" data-index="${index}" ${item.done ? "checked" : ""}>${escapeHtml(item.text)}</label>`).join("")}` : ""}
    </div><div class="modal-footer"><button class="btn btn-secondary" data-action="close-modal">Close</button><button class="btn btn-primary" data-action="edit-from-detail" data-id="${task.id}">${icon("edit", "icon-sm")}Edit task</button></div></section></div>`;
}

function renderPasswordModal() {
  return `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal small" role="dialog" aria-modal="true" aria-labelledby="password-title"><form id="password-form"><div class="modal-header"><div><h2 id="password-title">Change password</h2><p>Choose a new password you haven't used before.</p></div><button class="icon-button" type="button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div><div class="modal-body"><div class="field"><label for="current-password">Current password</label><input class="input" id="current-password" type="password" name="currentPassword" required autocomplete="current-password"></div><div class="field"><label for="new-password">New password</label><input class="input" id="new-password" type="password" name="newPassword" required minlength="8" autocomplete="new-password"></div></div><div class="modal-footer"><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button><button class="btn btn-primary" type="submit">Update password</button></div></form></section></div>`;
}

function renderConfirmModal(modal) {
  return `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal small" role="dialog" aria-modal="true" aria-labelledby="confirm-title"><div class="modal-header"><div><h2 id="confirm-title">${escapeHtml(modal.title)}</h2><p>${escapeHtml(modal.message)}</p></div><button class="icon-button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div><div class="modal-footer"><button class="btn btn-secondary" data-action="close-modal">Cancel</button><button class="btn btn-danger" data-action="${modal.confirmAction}">${escapeHtml(modal.confirmLabel)}</button></div></section></div>`;
}

function renderForgotModal() {
  return `<div class="modal-backdrop" data-action="backdrop-close"><section class="modal small" role="dialog" aria-modal="true" aria-labelledby="forgot-title"><div class="modal-header"><div><h2 id="forgot-title">Forgot your password?</h2><p>Password recovery email isn't configured in this local demo.</p></div><button class="icon-button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div><div class="modal-body"><p class="detail-description">If this is your project, create a fresh demo account or sign in with the password you registered. For a real deployment, connect an email provider and a secure, expiring reset link.</p></div><div class="modal-footer"><button class="btn btn-primary" data-action="close-modal">Got it</button></div></section></div>`;
}

function updateData() {
  return api("/api/data", { method: "PUT", body: JSON.stringify({ tasks: state.tasks, categories: state.categories, preferences: state.preferences }) });
}

async function saveData(message) {
  try {
    await updateData();
    if (message) toast(message);
  } catch (error) {
    toast(error.message, true);
  }
}

function findTask(id) {
  return state.tasks.find(task => task.id === id);
}

function openTaskModal(task = null, date = "") {
  state.modal = { type: "task", task: task ? structuredClone(task) : null, subtasks: task ? structuredClone(task.subtasks || []) : [], date };
  state.popover = null;
  render();
  window.setTimeout(() => document.getElementById("task-title")?.focus(), 0);
}

function openConfirm(title, message, confirmLabel, confirmAction) {
  state.modal = { type: "confirm", title, message, confirmLabel, confirmAction };
  render();
}

async function toggleTask(id) {
  const task = findTask(id);
  if (!task) return;
  task.status = task.status === "Completed" ? "To Do" : "Completed";
  task.updatedAt = new Date().toISOString();
  render();
  await saveData(task.status === "Completed" ? "Task completed. Nice work!" : "Task moved back to To Do.");
}

function renderWithFocus() {
  restoreFocus(render);
}

app.addEventListener("submit", async event => {
  const form = event.target;
  if (form.id === "auth-form") {
    event.preventDefault();
    state.authError = "";
    const values = new FormData(form);
    const payload = Object.fromEntries(values.entries());
    if (state.authMode === "register" && payload.password !== payload.confirm) {
      state.authError = "Those passwords don't match.";
      return render();
    }
    if (!form.reportValidity()) return;
    state.authBusy = true;
    render();
    try {
      const result = await api(state.authMode === "register" ? "/api/register" : "/api/login", { method: "POST", body: JSON.stringify(payload) });
      state.user = result.user;
      Object.assign(state, result.data);
      state.authError = "";
      state.authBusy = false;
      state.page = "dashboard";
      state.notificationsRead = false;
      render();
    } catch (error) {
      state.authBusy = false;
      state.authError = error.message;
      render();
    }
    return;
  }
  if (form.id === "task-form") {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries());
    const existing = state.modal.task;
    const task = {
      id: existing?.id || crypto.randomUUID(),
      title: values.title.trim(),
      description: values.description.trim(),
      category: values.category || state.categories[0] || "Other",
      priority: values.priority,
      status: values.status,
      dueDate: values.dueDate,
      dueTime: values.dueTime,
      reminder: values.reminder,
      subtasks: state.modal.subtasks.filter(item => item.text.trim()).map(item => ({ ...item, text: item.text.trim() })),
      createdAt: existing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    if (existing) state.tasks = state.tasks.map(item => item.id === existing.id ? task : item);
    else state.tasks.unshift(task);
    state.modal = null;
    render();
    await saveData(existing ? "Your changes have been saved." : "Task added to your list.");
    return;
  }
  if (form.id === "category-form") {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = new FormData(form).get("name").trim();
    const current = state.modal.category;
    if (state.categories.some(category => category.toLowerCase() === name.toLowerCase() && category !== current)) {
      toast("That category already exists.", true);
      return;
    }
    if (current) {
      state.categories = state.categories.map(category => category === current ? name : category);
      state.tasks.forEach(task => { if (task.category === current) task.category = name; });
      if (state.categoryFilter === current) state.categoryFilter = name;
    } else state.categories.push(name);
    state.modal = null;
    render();
    await saveData(current ? "Category updated." : "Category added.");
    return;
  }
  if (form.id === "profile-form") {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const result = await api("/api/profile", { method: "PATCH", body: JSON.stringify(values) });
      state.user = result.user;
      render();
      toast("Profile updated.");
    } catch (error) { toast(error.message, true); }
    return;
  }
  if (form.id === "password-form") {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      await api("/api/password", { method: "POST", body: JSON.stringify(values) });
      state.modal = null;
      render();
      toast("Your password has been updated.");
    } catch (error) { toast(error.message, true); }
  }
});

app.addEventListener("input", event => {
  const target = event.target;
  if (target.matches('[data-search="global"]')) {
    state.search = target.value;
    renderWithFocus();
  } else if (target.matches('[data-search="tasks"]')) {
    state.taskSearch = target.value;
    renderWithFocus();
  } else if (target.matches("[data-subtask-index]")) {
    const index = Number(target.dataset.subtaskIndex);
    if (state.modal?.type === "task" && state.modal.subtasks[index]) state.modal.subtasks[index].text = target.value;
  }
});

app.addEventListener("change", async event => {
  const target = event.target;
  if (target.matches("[data-filter]")) {
    const filter = target.dataset.filter;
    if (filter === "All statuses") state.statusFilter = target.value;
    else if (filter === "All priorities") state.priorityFilter = target.value;
    else if (filter === "All categories") state.categoryFilter = target.value;
    else if (filter === "sort") state.sortBy = target.value;
    renderWithFocus();
    return;
  }
  if (target.matches('[data-action="toggle-task"]')) {
    await toggleTask(target.dataset.id);
    return;
  }
  if (target.matches("[data-action='toggle-subtask-detail']")) {
    const task = findTask(target.dataset.id);
    if (task?.subtasks[target.dataset.index]) {
      task.subtasks[target.dataset.index].done = target.checked;
      task.updatedAt = new Date().toISOString();
      state.modal = { type: "detail", task };
      render();
      await saveData("Subtask progress updated.");
    }
  }
});

app.addEventListener("click", async event => {
  const target = event.target.closest("[data-action], [data-nav], [data-tab]");
  if (!target) {
    if (state.search && !event.target.closest(".global-search")) {
      state.search = "";
      if (state.popover !== "notifications" && state.popover !== "profile") state.popover = null;
      render();
    }
    return;
  }
  if (target.dataset.nav) {
    state.page = target.dataset.nav;
    state.mobileNavOpen = false;
    state.popover = null;
    state.search = "";
    render();
    return;
  }
  if (target.dataset.tab) {
    state.taskTab = target.dataset.tab;
    render();
    return;
  }
  const action = target.dataset.action;
  if (action === "switch-auth") {
    state.authMode = state.authMode === "login" ? "register" : "login";
    state.authError = "";
    render();
  } else if (action === "toggle-password") {
    const input = target.parentElement.querySelector("input");
    input.type = input.type === "password" ? "text" : "password";
    target.innerHTML = icon(input.type === "password" ? "eye" : "eyeOff", "icon-sm");
    target.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password");
  } else if (action === "forgot-password") {
    state.modal = { type: "forgot" };
    render();
  } else if (action === "demo-login") {
    target.disabled = true;
    try {
      const result = await api("/api/demo", { method: "POST", body: "{}" });
      state.user = result.user;
      Object.assign(state, result.data);
      state.authError = "";
      state.page = "dashboard";
      state.notificationsRead = false;
      render();
    } catch (error) {
      toast(error.message, true);
      render();
    }
  } else if (action === "new-task") {
    openTaskModal();
  } else if (action === "edit-task") {
    openTaskModal(findTask(target.dataset.id));
  } else if (action === "edit-from-detail") {
    const task = findTask(target.dataset.id);
    openTaskModal(task);
  } else if (action === "task-detail") {
    state.modal = { type: "detail", task: findTask(target.dataset.id) };
    render();
  } else if (action === "close-modal") {
    state.modal = null;
    render();
  } else if (action === "backdrop-close" && event.target === target) {
    state.modal = null;
    render();
  } else if (action === "add-subtask") {
    const form = app.querySelector("#task-form");
    if (form) state.modal.draft = Object.fromEntries(new FormData(form).entries());
    state.modal.subtasks.push({ id: crypto.randomUUID(), text: "", done: false });
    render();
    app.querySelector(`[data-subtask-index="${state.modal.subtasks.length - 1}"]`)?.focus();
  } else if (action === "remove-subtask") {
    const form = app.querySelector("#task-form");
    if (form) state.modal.draft = Object.fromEntries(new FormData(form).entries());
    state.modal.subtasks.splice(Number(target.dataset.index), 1);
    render();
  } else if (action === "delete-task") {
    const task = findTask(target.dataset.id);
    if (task) openConfirm("Delete this task?", `“${task.title}” will be permanently removed. This can't be undone.`, "Delete task", "confirm-delete-task");
    if (state.modal?.type === "confirm") state.modal.id = target.dataset.id;
  } else if (action === "confirm-delete-task") {
    const modal = state.modal;
    if (modal.id) state.tasks = state.tasks.filter(task => task.id !== modal.id);
    state.modal = null;
    render();
    await saveData("Task deleted.");
  } else if (action === "new-category") {
    state.modal = { type: "category" };
    render();
  } else if (action === "edit-category") {
    state.modal = { type: "category", category: target.dataset.category };
    render();
  } else if (action === "delete-category") {
    const category = target.dataset.category;
    openConfirm("Delete this category?", `Tasks in “${category}” will be moved to Other.`, "Delete category", "confirm-delete-category");
    state.modal.category = category;
  } else if (action === "confirm-delete-category") {
    const category = state.modal.category;
    state.categories = state.categories.filter(item => item !== category);
    if (!state.categories.includes("Other")) state.categories.push("Other");
    state.tasks.forEach(task => { if (task.category === category) task.category = "Other"; });
    if (state.categoryFilter === category) state.categoryFilter = "All categories";
    state.modal = null;
    render();
    await saveData("Category deleted. Its tasks are now in Other.");
  } else if (action === "toggle-preference") {
    const key = target.dataset.key;
    if (key === "darkMode") state.preferences.theme = state.preferences.theme === "dark" ? "light" : "dark";
    else state.preferences[key] = !state.preferences[key];
    setTheme();
    render();
    await saveData("Your preferences have been updated.");
  } else if (action === "toggle-theme") {
    state.preferences.theme = state.preferences.theme === "dark" ? "light" : "dark";
    state.popover = null;
    render();
    await saveData("Theme updated.");
  } else if (action === "notifications") {
    state.popover = state.popover === "notifications" ? null : "notifications";
    render();
  } else if (action === "mark-notifications-read") {
    state.notificationsRead = true;
    render();
  } else if (action === "profile-menu") {
    state.popover = state.popover === "profile" ? null : "profile";
    render();
  } else if (action === "toggle-mobile-nav") {
    state.mobileNavOpen = !state.mobileNavOpen;
    render();
  } else if (action === "close-mobile-nav") {
    state.mobileNavOpen = false;
    render();
  } else if (action === "previous-month" || action === "next-month") {
    const amount = action === "previous-month" ? -1 : 1;
    state.month = new Date(state.month.getFullYear(), state.month.getMonth() + amount, 1);
    render();
  } else if (action === "today") {
    state.month = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    render();
  } else if (action === "calendar-day") {
    openTaskModal(null, target.dataset.date);
  } else if (action === "search-open-task") {
    state.search = "";
    state.page = "tasks";
    state.modal = { type: "detail", task: findTask(target.dataset.id) };
    render();
  } else if (action === "change-password") {
    state.modal = { type: "password" };
    render();
  } else if (action === "delete-account") {
    openConfirm("Delete your account?", "This permanently deletes your account and all tasks. This action can't be undone.", "Delete account", "confirm-delete-account");
  } else if (action === "confirm-delete-account") {
    try {
      await api("/api/account", { method: "DELETE" });
      state.user = null;
      state.modal = null;
      state.authMode = "login";
      state.authError = "";
      render();
      toast("Your account has been deleted.");
    } catch (error) { toast(error.message, true); }
  } else if (action === "logout") {
    try {
      await api("/api/logout", { method: "POST" });
      state.user = null;
      state.tasks = [];
      state.categories = [];
      state.preferences = {};
      state.modal = null;
      state.page = "dashboard";
      state.authMode = "login";
      state.authError = "";
      render();
    } catch (error) { toast(error.message, true); }
  }
});

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    const input = app.querySelector('[data-search="global"]');
    input?.focus();
  } else if (event.key === "Escape") {
    if (state.modal) {
      state.modal = null;
      render();
    } else if (state.popover || state.search) {
      state.popover = null;
      state.search = "";
      render();
    } else if (state.mobileNavOpen) {
      state.mobileNavOpen = false;
      render();
    }
  }
});

async function start() {
  try {
    const result = await api("/api/session");
    if (result.user) {
      state.user = result.user;
      Object.assign(state, result.data);
    }
  } catch (error) {
    toast(error.message, true);
  }
  render();
}

start();
