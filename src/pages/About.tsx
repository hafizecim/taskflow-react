import {
  CalendarDays,
  CheckSquare,
  Code2,
  Heart,
  Info,
  Pin,
  Settings,
} from 'lucide-react'

function About() {
  return (
    <div className="min-h-full bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            <CheckSquare size={30} />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            TaskFlow
          </h1>

          <p className="mt-2 text-slate-500">
            Personal Task Management
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Info className="text-indigo-600" size={21} />

              <h2 className="text-lg font-bold text-slate-900">
                About TaskFlow
              </h2>
            </div>

            <p className="mt-4 leading-7 text-slate-600">
              TaskFlow is a personal task management
              application designed to help users organize,
              track and manage their daily tasks efficiently.
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              The application provides a simple and practical
              workspace for creating tasks, monitoring their
              status, setting priorities and keeping important
              tasks easily accessible.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckSquare
                className="text-emerald-600"
                size={21}
              />

              <h2 className="text-lg font-bold text-slate-900">
                Features
              </h2>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <CheckSquare
                  size={18}
                  className="text-indigo-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  Task Management
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <Pin
                  size={18}
                  className="text-purple-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  Pin Important Tasks
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <Heart
                  size={18}
                  className="text-pink-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  Favorite Tasks
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <CalendarDays
                  size={18}
                  className="text-blue-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  Calendar View
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <Code2
                  size={18}
                  className="text-orange-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  Reports & Statistics
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <Settings
                  size={18}
                  className="text-slate-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  User Preferences
                </span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Technologies
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700">
                React
              </span>

              <span className="rounded-full bg-cyan-100 px-3 py-1.5 text-sm font-semibold text-cyan-700">
                TypeScript
              </span>

              <span className="rounded-full bg-sky-100 px-3 py-1.5 text-sm font-semibold text-sky-700">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-yellow-100 px-3 py-1.5 text-sm font-semibold text-yellow-700">
                Vite
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                React Router
              </span>
            </div>
          </section>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 text-center">
            <p className="text-sm font-semibold text-indigo-800">
              TaskFlow v1.0.0
            </p>

            <p className="mt-1 text-xs text-indigo-600">
              Personal Task Management Application
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
