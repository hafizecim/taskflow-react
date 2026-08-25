import {
  Bell,
  Moon,
  Pin,
  Settings as SettingsIcon,
} from 'lucide-react'

import { useState } from 'react'

function Settings() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] =
    useState(true)
  const [pinnedFirst, setPinnedFirst] =
    useState(false)

  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
              <SettingsIcon size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Settings
              </h1>

              <p className="mt-1 text-slate-500">
                Manage your TaskFlow preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Customize how TaskFlow behaves.
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            <div className="flex items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <Moon size={19} />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Dark Mode
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Use a darker appearance for the application.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                aria-pressed={darkMode}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  darkMode
                    ? 'bg-indigo-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
                    darkMode
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Bell size={19} />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Notifications
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Enable task-related notifications.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setNotifications(!notifications)
                }
                aria-pressed={notifications}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  notifications
                    ? 'bg-indigo-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
                    notifications
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Pin size={19} />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Show Pinned Tasks First
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Display pinned tasks before other tasks.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setPinnedFirst(!pinnedFirst)
                }
                aria-pressed={pinnedFirst}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  pinnedFirst
                    ? 'bg-indigo-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
                    pinnedFirst
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
          <p className="text-sm font-semibold text-indigo-800">
            Settings
          </p>

          <p className="mt-1 text-sm leading-6 text-indigo-700">
            Your preferences are currently stored for this
            session. We can persist them to local storage in
            the next step.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Settings
