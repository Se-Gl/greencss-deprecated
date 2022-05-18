import React, { useState, useContext, createContext } from 'react'
import { navsublinks } from '@/data/nav'

const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [submenuPosition, setSubmenuPosition] = useState({})
  const [submenuItem, setSubmenuItem] = useState({})

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSubmenu = (text, position) => {
    setSubmenuPosition(position)
    setSubmenuItem(navsublinks.find((link) => link.page === text))

    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <NavContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        submenuPosition,
        submenuItem
      }}>
      {children}
    </NavContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(NavContext)
}
