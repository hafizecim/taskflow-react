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
      const tasksWithPinStatus = fetchedTasks.map(
        (task) => ({
          ...task,
          isPinned: task.isPinned ?? false,
        }),
      )

      setTasks(tasksWithPinStatus)
    }
  }, [fetchedTasks, tasks.length, setTasks])

  const addTask = (task: Task) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      task,
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
      currentTasks.filter(
        (task) => task.id !== id,
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
        togglePin,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}