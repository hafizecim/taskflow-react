import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
      />

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar
          mobileOpen={mobileMenuOpen}
          onMobileClose={closeMobileMenu}
        />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout