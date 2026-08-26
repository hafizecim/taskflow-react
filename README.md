# TaskFlow

> A modern and responsive task management application built with React and TypeScript.

TaskFlow is a personal task management application designed to help users organize, prioritize, track, and manage their daily tasks through a clean and intuitive interface.

The project focuses on practical React development, reusable components, state management, client-side routing, and persistent local data storage.

---

## ✨ Features

### Task Management

* Create new tasks
* Edit existing tasks
* View task details
* Delete tasks
* Restore deleted tasks
* Search tasks by title or description
* Filter tasks by status and priority

### Organization

* 📌 Pin important tasks
* ❤️ Add tasks to favorites
* 📅 Calendar-based task view
* 📊 Task reports and statistics
* ⚙️ User preferences
* ℹ️ Application information

### User Experience

* Responsive layout
* Clean and modern UI
* Sidebar navigation
* Interactive task cards
* Visual status and priority indicators
* Persistent task data using browser Local Storage

---

## 🛠️ Tech Stack

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| React         | UI development                |
| TypeScript    | Type-safe development         |
| Vite          | Development and build tooling |
| React Router  | Client-side routing           |
| Tailwind CSS  | Styling and responsive UI     |
| Lucide React  | Interface icons               |
| Local Storage | Client-side data persistence  |

---

## 📸 Screenshots

### Dashboard

<img width="1353" height="631" alt="image" src="https://github.com/user-attachments/assets/b9d6766b-19e1-4f63-be33-b97212a9fca3" />


### Tasks

<img width="1346" height="605" alt="image" src="https://github.com/user-attachments/assets/46aaf985-6f54-4f86-8ab2-bd498360ef97" />

### Add Task

<img width="1350" height="639" alt="image" src="https://github.com/user-attachments/assets/574af732-4fcf-4162-84a7-3552308d8d35" />

### Calendar

<img width="1346" height="622" alt="image" src="https://github.com/user-attachments/assets/e249857c-22a2-4838-9654-70d0b04f99a8" />


### Reports

<img width="1346" height="627" alt="image" src="https://github.com/user-attachments/assets/3ea9d169-2e3e-4834-a319-c16612694ae5" />

### Favorites

<img width="1345" height="550" alt="image" src="https://github.com/user-attachments/assets/84c835ea-3ab3-4b00-b5fe-466236d71561" />

### Trash

<img width="1351" height="549" alt="image" src="https://github.com/user-attachments/assets/5b4cf880-29ea-41bf-9e82-f80c2719faa2" />

### Settings

<img width="1343" height="622" alt="image" src="https://github.com/user-attachments/assets/e709da58-5407-486e-81bf-e2f871727026" />

### About

<img width="1344" height="643" alt="image" src="https://github.com/user-attachments/assets/5be3bbbc-0bba-492e-9ea4-d713ba21173b" />


> Screenshots will be updated as the application continues to evolve.

---

## 🧩 Application Structure

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

---

## 🗂️ Task Model

Each task contains:

```text
Task
├── id
├── title
├── description
├── category
├── priority
├── status
├── dueDate
├── createdAt
├── isPinned
├── isFavorite
└── isDeleted
```

### Status

* `Todo`
* `In Progress`
* `Completed`

### Priority

* `Low`
* `Medium`
* `High`

---

## 💾 Data Management

TaskFlow currently uses the browser's **Local Storage** for client-side persistence.

This allows task information and user actions such as:

* Favorites
* Pinned tasks
* Deleted tasks
* Restored tasks

to remain available after refreshing the application.

The application also includes a reusable data-fetching structure for loading initial task data.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/hafizecim/taskflow-react.git
```

Navigate to the project:

```bash
cd taskflow-react
```

Install dependencies:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧭 Application Pages

| Page      | Purpose                             |
| --------- | ----------------------------------- |
| Dashboard | Task overview and summary           |
| Tasks     | Search, filter and manage tasks     |
| Add Task  | Create new tasks                    |
| Calendar  | View tasks by due date              |
| Reports   | Analyze task statistics             |
| Favorites | View favorite tasks                 |
| Trash     | Manage deleted tasks                |
| Settings  | Manage application preferences      |
| About     | Application and project information |

---

## 🔮 Roadmap

Future improvements may include:

* [ ] User authentication
* [ ] Backend API integration
* [ ] Database integration
* [ ] Persistent user settings
* [ ] Advanced charts and analytics
* [ ] Drag-and-drop task management
* [ ] Task reminders and notifications
* [ ] Mobile navigation
* [ ] Production deployment

---

## 📚 Learning Goals

This project is also being developed as a practical React and TypeScript learning project.

The main development goals include:

* Building reusable React components
* Working with TypeScript interfaces and types
* Managing application state with Context API
* Creating custom React hooks
* Implementing client-side routing
* Working with browser storage
* Building responsive interfaces
* Organizing a scalable frontend project structure

---

## 👩‍💻 Author

**Hafize Şenyıl**

Computer Engineering · Industrial Engineering · Software Development

---

## 📄 License

This project is developed for educational and portfolio purposes.
