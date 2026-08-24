import {
  Eye,
  Pencil,
  Trash2,
  PinIcon,
  Heart,
} from 'lucide-react'

import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

import type {
  TaskPriority,
  TaskStatus,
} from '../types/task'



function Tasks() {
  const navigate = useNavigate()

  const {
    tasks,
    loading,
    error,
    refetch,
    deleteTask,
    togglePin,
    toggleFavorite,
  } = useTasks()

  const [searchTerm, setSearchTerm] = useState('')

  const [statusFilter, setStatusFilter] =
    useState<TaskStatus | ''>('')

  const [priorityFilter, setPriorityFilter] =
    useState<TaskPriority | ''>('')

  const filteredTasks = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLowerCase()

    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search) ||
        task.description
          .toLowerCase()
          .includes(search)

      const matchesStatus =
        !statusFilter ||
        task.status === statusFilter

      const matchesPriority =
        !priorityFilter ||
        task.priority === priorityFilter

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      )
    })
  }, [
    tasks,
    searchTerm,
    statusFilter,
    priorityFilter,
  ])

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?',
    )

    if (confirmed) {
      deleteTask(id)
    }
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setStatusFilter('')
    setPriorityFilter('')
  }

  if (loading && tasks.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

        <p className="text-lg font-medium text-gray-600">
          Loading tasks...
        </p>
      </div>
    )
  }

  if (error && tasks.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h2 className="mb-2 text-xl font-bold text-red-700">
            Failed to load tasks
          </h2>

          <p className="mb-4 text-red-600">
            Something went wrong while loading the tasks.
          </p>

          <button
            type="button"
            onClick={refetch}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Tasks
        </h1>

        <p className="mt-2 text-gray-600">
          Manage, search and filter your tasks.
        </p>
      </div>

      <div className="mb-6 rounded-xl border bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Search Tasks
            </label>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search by title or description..."
              className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value as
                    | TaskStatus
                    | '',
                )
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value="">
                All statuses
              </option>

              <option value="Todo">
                Todo
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Priority
            </label>

            <select
              value={priorityFilter}
              onChange={(event) =>
                setPriorityFilter(
                  event.target.value as
                    | TaskPriority
                    | '',
                )
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value="">
                All priorities
              </option>

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            Showing {filteredTasks.length} of{' '}
            {tasks.length} tasks
          </p>

          <button
            type="button"
            onClick={handleClearFilters}
            className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">
            No tasks match your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h2 className="min-w-0 text-xl font-semibold text-gray-900">
                  {task.title}
                </h2>

                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={() => togglePin(task.id)}
                    title={
                      task.isPinned
                        ? 'Unpin task'
                        : 'Pin task'
                    }
                    className={`rounded-lg p-2 transition ${
                      task.isPinned
                        ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        : 'bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-500'
                    }`}
                  >
                    <PinIcon
                      size={18}
                      strokeWidth={2}
                      fill={
                        task.isPinned
                          ? 'currentColor'
                          : 'none'
                      }
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      toggleFavorite(task.id)
                    }
                    title={
                      task.isFavorite
                        ? 'Remove from favorites'
                        : 'Add to favorites'
                    }
                    className={`rounded-lg p-2 transition ${
                      task.isFavorite
                        ? 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                        : 'bg-slate-50 text-slate-400 hover:bg-pink-50 hover:text-pink-500'
                    }`}
                  >
                    <Heart
                      size={18}
                      fill={
                        task.isFavorite
                          ? 'currentColor'
                          : 'none'
                      }
                    />
                  </button>
                </div>
              </div>
              

              <p className="mb-4 text-gray-600">
                {task.description}
              </p>

              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>Category:</strong>{' '}
                  {task.category}
                </p>

                <div className="flex items-center gap-2">
                  <strong>Priority:</strong>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      task.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : task.priority === 'Medium'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <strong>Status:</strong>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      task.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : task.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                <p>
                  <strong>Due Date:</strong>{' '}
                  {task.dueDate}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/tasks/${task.id}`)
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                >
                  <Eye size={16} />
                  View
                </button>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/tasks/${task.id}/edit`,
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
                >
                  <Pencil size={16} />
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(task.id)
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tasks