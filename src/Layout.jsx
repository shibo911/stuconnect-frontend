import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import Home from './components/Home'

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`flex ${isDarkMode ? 'dark' : ''} dark:invert`}>
      <Sidebar onDarkModeToggle={handleDarkModeToggle} />
      <Outlet/>
    </div>
  )
}

export default Layout
