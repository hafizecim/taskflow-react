import { createContext } from 'react'

import type { Task } from '../types/task'

export interface TaskContextType {
  tasks: Task[]
  loading: boolean
  error: string | null
  refetch: () => void

  addTask: (task: Task) => void
  updateTask: (task: Task) => void

  deleteTask: (id: string) => void
  restoreTask: (id: string) => void
  permanentDeleteTask: (id: string) => void

  togglePin: (id: string) => void
  toggleFavorite: (id: string) => void
}

export const TaskContext =
  createContext<TaskContextType | undefined>(
    undefined,
  )
