import { useEffect, type ReactNode } from 'react'

import type { Task } from '../types/task'

import useFetch from '../hooks/useFetch'
import useLocalStorage from '../hooks/useLocalStorage'

import { TaskContext } from './TaskContext'

interface TaskProviderProps {
  children: ReactNode
}

export function TaskProvider({
  children,
}: TaskProviderProps) {
  const [tasks, setTasks] = useLocalStorage<Task[]>(
    'taskflow-tasks',
    [],
  )

  const {
    data: fetchedTasks,
    loading,
    error,
    refetch,
  } = useFetch<Task[]>('/tasks.json')

  useEffect(() => {
    if (tasks.length === 0 && fetchedTasks) {
      const tasksWithStatus = fetchedTasks.map(
        (task) => ({
          ...task,
          isPinned: task.isPinned ?? false,
          isFavorite: task.isFavorite ?? false,
          isDeleted: task.isDeleted ?? false,
        }),
      )

      setTasks(tasksWithStatus)
    }
  }, [fetchedTasks, tasks.length, setTasks])

  const addTask = (task: Task) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        ...task,
        isPinned: task.isPinned ?? false,
        isFavorite: task.isFavorite ?? false,
        isDeleted: false,
      },
    ])
  }

  const updateTask = (updatedTask: Task) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task,
      ),
    )
  }

  const deleteTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isDeleted: true,
            }
          : task,
      ),
    )
  }

  const restoreTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isDeleted: false,
            }
          : task,
      ),
    )
  }

  const permanentDeleteTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== id,
      ),
    )
  }

  const toggleFavorite = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isFavorite: !task.isFavorite,
            }
          : task,
      ),
    )
  }

  const togglePin = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isPinned: !task.isPinned,
            }
          : task,
      ),
    )
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        refetch,
        addTask,
        updateTask,
        deleteTask,
        restoreTask,
        permanentDeleteTask,
        togglePin,
        toggleFavorite,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
