# TaskFlow — Task Management System

A responsive task-management SaaS demo with a vanilla JavaScript frontend and a small Node.js API. No third-party runtime packages or database server are required.

## Run locally

1. Install [Node.js 18 or newer](https://nodejs.org/).
2. From this folder, run `npm start` (`npm.cmd start` in Windows PowerShell if script execution policy blocks `npm.ps1`).
3. Open <http://localhost:3000>, create an account, or choose **Explore the demo workspace** to open a populated dashboard without signing up.

For automatic server restarts while developing, run `npm run dev`.

## Features

- Account registration and sign-in, with salted scrypt password hashes and HTTP-only session cookies.
- One-click access to a shared sample workspace for product demos.
- A seeded dashboard, task creation and editing, subtasks, priorities, reminders, task search, filters, sorting, and completion tracking.
- Monthly calendar, categories, reminders, profile and password settings, and persistent light/dark preferences.
- Responsive desktop and mobile layouts.
- Per-account data saved to `data/taskflow.json`, created the first time the app writes data.

The sample demo workspace is shared between visitors using the demo button; create a personal account for separate private data. Sign-in sessions are held in memory and expire when the server stops. Password reset email delivery and notification email delivery are not configured in this local demo. For a public deployment, use HTTPS, configure a production session store and email provider, and add standard production security controls.
