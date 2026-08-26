# TaskFlow

TaskFlow is a modern personal task management application built with React and TypeScript.

It provides a simple and organized workspace for creating, managing, tracking, and organizing daily tasks.

## Features

* 📊 Dashboard
* ✅ Task management
* ➕ Add new tasks
* ✏️ Edit tasks
* 👁️ View task details
* 🗑️ Delete tasks
* ♻️ Restore deleted tasks
* 📌 Pin important tasks
* ❤️ Favorite tasks
* 🔎 Search tasks
* 🎯 Filter tasks by status and priority
* 📅 Calendar view
* 📈 Reports and statistics
* ⚙️ User settings
* ℹ️ About page
* 💾 Local storage persistence
* 📱 Responsive layout

## Technologies

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Lucide React
* JavaScript / TypeScript
* Local Storage

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   └── Sidebar.tsx
│
├── context/
│   ├── TaskContext.ts
│   ├── TaskProvider.tsx
│   └── useTasks.ts
│
├── hooks/
│   ├── useFetch.ts
│   └── useLocalStorage.ts
│
├── layouts/
│   └── MainLayout.tsx
│
├── pages/
│   ├── About.tsx
│   ├── AddTask.tsx
│   ├── Calendar.tsx
│   ├── Dashboard.tsx
│   ├── EditTask.tsx
│   ├── Favorites.tsx
│   ├── Reports.tsx
│   ├── Settings.tsx
│   ├── TaskDetail.tsx
│   ├── Tasks.tsx
│   └── Trash.tsx
│
├── types/
│   └── task.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Task Model

Each task contains the following information:

* ID
* Title
* Description
* Category
* Priority
* Status
* Due date
* Created date
* Pin status
* Favorite status
* Deleted status

### Task Status

* Todo
* In Progress
* Completed

### Task Priority

* Low
* Medium
* High

## Installation

Clone the repository:

```bash
git clone https://github.com/hafizecim/taskflow-react.git
```

Navigate to the project directory:

```bash
cd taskflow-react
```

Install dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## Build

To create a production build:

```bash
npm run build
```

## Application Navigation

The application includes the following main sections:

| Page      | Description                     |
| --------- | ------------------------------- |
| Dashboard | Overview of tasks               |
| Tasks     | Search, filter and manage tasks |
| Add Task  | Create a new task               |
| Calendar  | View tasks by due date          |
| Reports   | Task statistics and reports     |
| Favorites | View favorite tasks             |
| Trash     | Manage deleted tasks            |
| Settings  | Manage user preferences         |
| About     | Project information             |

## Data Persistence

Task data is stored in the browser using **Local Storage**.

This allows tasks, favorites, pinned tasks, and deleted tasks to remain available after refreshing the page.

## Screenshots

Screenshots of the application will be added here.

## Future Improvements

Planned improvements include:

* User authentication
* Backend API integration
* Database support
* Persistent user settings
* Advanced reports and charts
* Improved calendar functionality
* Drag-and-drop task management
* Task notifications
* Mobile navigation
* Deployment to a production environment

## Author

**Hafize Şenyıl**

Software Engineer | Computer Engineering | Industrial Engineering

## License

This project is created for learning and portfolio development purposes.
