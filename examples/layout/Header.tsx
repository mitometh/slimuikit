import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <header className="glass dark:dark-glass sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-purple rounded-xl flex items-center justify-center text-white font-bold animate-pulse-soft">
              M
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-purple bg-clip-text text-transparent">
              Modern UI System
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <a href="/" className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-all">
              Dashboard
            </a>
            <a href="/example" className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-all">
              Page Example
            </a>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-all"
            >
              <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
            </button>
          </nav>
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-gray-600 dark:text-gray-300"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="/" className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 transition-all">
              Dashboard
            </a>
            <a href="/example" className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 transition-all">
              Page Example
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header