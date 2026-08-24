export type TaskStatus =
  'Todo' | 'In Progress' | 'Completed'

export type TaskPriority =
  'Low' | 'Medium' | 'High'

export interface Task {
  id: string
  title: string
  description: string
  category: string
  priority: TaskPriority
  status: TaskStatus
  dueDate: string
  createdAt: string
  isPinned: boolean
}