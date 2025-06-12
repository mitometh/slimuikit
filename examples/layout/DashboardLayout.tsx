import React, { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    // Close sidebar on mobile by default
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
        setMobileMenuOpen(false)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = [
    { 
      section: 'Overview',
      items: [
        { icon: 'chart-line', label: 'Dashboard', href: '#dashboard' },
        { icon: 'palette', label: 'Color System', href: '#colors' },
      ]
    },
    {
      section: 'Components',
      items: [
        { icon: 'cube', label: 'UI Components', href: '#components' },
        { icon: 'toggle-on', label: 'Form Elements', href: '#forms' },
        { icon: 'exclamation-triangle', label: 'Alerts & Badges', href: '#alerts' },
        { icon: 'clone', label: 'Cards', href: '#cards' },
      ]
    },
    {
      section: 'Data',
      items: [
        { icon: 'table', label: 'Tables', href: '#tables' },
        { icon: 'chart-bar', label: 'Progress Bars', href: '#progress' },
      ]
    }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative h-full bg-white dark:bg-gray-800 shadow-lg dark:shadow-none dark:border-r dark:border-gray-700 transition-all duration-300 ease-in-out flex flex-col z-50`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-purple rounded-xl flex items-center justify-center text-white font-bold">
                M
              </div>
              {sidebarOpen && (
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Modern UI</h2>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden md:block"
            >
              <i className={`fas fa-${sidebarOpen ? 'angle-left' : 'angle-right'} text-gray-600 dark:text-gray-300`}></i>
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
            >
              <i className="fas fa-times text-gray-600 dark:text-gray-300"></i>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {sidebarOpen && (
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                  {section.section}
                </h3>
              )}
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                      if (window.innerWidth < 768) {
                        setMobileMenuOpen(false)
                      }
                    }}
                    className={`flex items-center ${
                      sidebarOpen ? 'px-3' : 'px-2 justify-center'
                    } py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer`}
                  >
                    <i className={`fas fa-${item.icon} ${sidebarOpen ? 'w-5' : 'w-6'} text-center`}></i>
                    {sidebarOpen && <span className="ml-3">{item.label}</span>}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className={`flex items-center ${sidebarOpen ? 'space-x-3' : 'justify-center'}`}>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-600 dark:text-gray-300 text-sm"></i>
            </div>
            {sidebarOpen && (
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
              >
                <i className="fas fa-bars text-gray-600 dark:text-gray-300"></i>
              </button>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">UI Component Showcase</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <i className={`fas fa-${darkMode ? 'sun' : 'moon'} text-gray-600 dark:text-gray-300`}></i>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
                <i className="fas fa-bell text-gray-600 dark:text-gray-300"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <i className="fas fa-cog text-gray-600 dark:text-gray-300"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout