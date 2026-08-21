import { useState, type SyntheticEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useTasks } from '../context/useTasks'

import type {
  TaskPriority,
  TaskStatus,
} from '../types/task'

function EditTask() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const {
    tasks,
    updateTask,
  } = useTasks()

  const task = tasks.find(
    (currentTask) => currentTask.id === id,
  )

  const [title, setTitle] = useState(
    task?.title ?? '',
  )

  const [description, setDescription] = useState(
    task?.description ?? '',
  )

  const [category, setCategory] = useState(
    task?.category ?? '',
  )

  const [priority, setPriority] =
    useState<TaskPriority | ''>(
      task?.priority ?? '',
    )

  const [status, setStatus] =
    useState<TaskStatus | ''>(
      task?.status ?? '',
    )

  const [dueDate, setDueDate] = useState(
    task?.dueDate ?? '',
  )

  const [errors, setErrors] = useState<string[]>([])

  if (!task) {
    return (
      <div className="mx-auto max-w-2xl p-6">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <span className="text-xl text-red-600">
              !
            </span>
          </div>

          <h1 className="mb-2 text-2xl font-bold text-red-800">
            Task Not Found
          </h1>

          <p className="mb-6 text-red-600">
            The task you are trying to edit does not
            exist.
          </p>

          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="rounded-lg bg-slate-800 px-5 py-2.5 font-medium text-white transition hover:bg-slate-700"
          >
            Back to Tasks
          </button>
        </div>
      </div>
    )
  }

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const validationErrors: string[] = []

    if (!title.trim()) {
      validationErrors.push(
        'Title is required.',
      )
    }

    if (!description.trim()) {
      validationErrors.push(
        'Description is required.',
      )
    }

    if (!category.trim()) {
      validationErrors.push(
        'Category is required.',
      )
    }

    if (!priority) {
      validationErrors.push(
        'Priority is required.',
      )
    }

    if (!status) {
      validationErrors.push(
        'Status is required.',
      )
    }

    if (!dueDate) {
      validationErrors.push(
        'Due date is required.',
      )
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!priority || !status) {
      return
    }

    updateTask({
      ...task,
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      priority,
      status,
      dueDate,
    })

    navigate('/tasks')
  }

  return (
    <div className="min-h-full bg-slate-50">
      <div className="mx-auto max-w-3xl p-6 lg:p-8">

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Task Management
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Edit Task
          </h1>

          <p className="mt-2 text-slate-500">
            Update the information of your task.
          </p>
        </div>

        {errors.length > 0 && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-5">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                !
              </div>

              <div>
                <p className="mb-2 font-semibold text-red-800">
                  Please fix the following errors:
                </p>

                <ul className="list-disc space-y-1 pl-5 text-sm text-red-600">
                  {errors.map((error) => (
                    <li key={error}>
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
        >
          <div className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description
              </label>

              <textarea
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={5}
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="Describe your task"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">
                    Select category
                  </option>

                  <option value="Work">
                    Work
                  </option>

                  <option value="Personal">
                    Personal
                  </option>

                  <option value="Study">
                    Study
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Priority
                </label>

                <select
                  value={priority}
                  onChange={(event) =>
                    setPriority(
                      event.target.value as
                        | TaskPriority
                        | '',
                    )
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">
                    Select priority
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

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(
                      event.target.value as
                        | TaskStatus
                        | '',
                    )
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">
                    Select status
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
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Due Date
                </label>

                <input
                  type="date"
                  value={dueDate}
                  onChange={(event) =>
                    setDueDate(event.target.value)
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() =>
                navigate('/tasks')
              }
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Update Task
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTask