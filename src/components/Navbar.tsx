function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-sm">
            T
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              TaskFlow
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Personal Task Management
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs text-slate-500">
              Welcome back
            </p>

            <p className="text-sm font-semibold text-slate-800">
              Hafize
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            H
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar