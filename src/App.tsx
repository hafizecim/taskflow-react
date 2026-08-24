import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import TaskDetail from './pages/TaskDetail'
import EditTask from './pages/EditTask'
import AddTask from './pages/AddTask'
import Favorites from './pages/Favorites'
import Pinned from './pages/Pinned'

import { TaskProvider } from './context/TaskProvider'

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/tasks"
              element={<Tasks />}
            />

            <Route
              path="/tasks/new"
              element={<AddTask />}
            />

            <Route
              path="/tasks/:id"
              element={<TaskDetail />}
            />

            <Route
              path="/tasks/:id/edit"
              element={<EditTask />}
            />

            <Route
              path="/favorites"
              element={<Favorites />}
            />

            <Route
              path="/pinned"
              element={<Pinned />}
            />
          </Route>
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App
