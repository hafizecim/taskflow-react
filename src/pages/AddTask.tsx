import { useState } from 'react'
import type { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from '../types/task'

function AddTask() {
  const navigate = useNavigate()
  const { addTask } = useTasks()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] =
    useState<TaskPriority | ''>('')
  const [status, setStatus] =
    useState<TaskStatus | ''>('')
  const [dueDate, setDueDate] = useState('')

  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const validationErrors: string[] = []

    if (!title.trim()) {
      validationErrors.push('Title is required.')
    }

    if (!description.trim()) {
      validationErrors.push(
        'Description is required.',
      )
    }

    if (!category.trim()) {
      validationErrors.push('Category is required.')
    }

    if (!priority) {
      validationErrors.push('Priority is required.')
    }

    if (!status) {
      validationErrors.push('Status is required.')
    }

    if (!dueDate) {
      validationErrors.push('Due date is required.')
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!priority || !status) {
      return
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      priority,
      status,
      dueDate,
      createdAt: new Date().toISOString(),
      isPinned: false,
    }

    addTask(newTask)

    navigate('/tasks')
  }

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}

        <div className="mb-8">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Task Management
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Add New Task
          </h1>

          <p className="mt-2 text-slate-500">
            Create a new task and keep your work organized.
          </p>
        </div>

        {/* Validation Errors */}

        {errors.length > 0 && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                !
              </div>

              <div>
                <p className="font-semibold text-red-800">
                  Please fix the following errors:
                </p>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-6">
            {/* Title */}

            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                placeholder="Enter task title"
              />
            </div>

            {/* Description */}

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Description
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                placeholder="Describe your task..."
              />
            </div>

            {/* Category + Priority */}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Category
                </label>

                <select
                  id="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="">
                    Select category
                  </option>

                  <option value="Work">Work</option>
                  <option value="Personal">
                    Personal
                  </option>
                  <option value="Study">Study</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="priority"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Priority
                </label>

                <select
                  id="priority"
                  value={priority}
                  onChange={(event) =>
                    setPriority(
                      event.target
                        .value as TaskPriority,
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="">
                    Select priority
                  </option>

                  <option value="Low">Low</option>
                  <option value="Medium">
                    Medium
                  </option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Status + Due Date */}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Status
                </label>

                <select
                  id="status"
                  value={status}
                  onChange={(event) =>
                    setStatus(
                      event.target.value as TaskStatus,
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                >
                  <option value="">
                    Select status
                  </option>

                  <option value="Todo">Todo</option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dueDate"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Due Date
                </label>

                <input
                  id="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(event) =>
                    setDueDate(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>
          </div>

          {/* Actions */}

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask