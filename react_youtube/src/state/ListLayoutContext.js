import { createContext, useContext, useState } from 'react'

const ListLayoutContext = createContext()

export function ListLayoutProvider({ children }) {
  const [isListView, setIsListView] = useState(false)

  const toggleListView = () => {
    setIsListView(!isListView)
  }

  return (
    <ListLayoutContext.Provider value={{
      isListView,
      toggleListView
    }}>
      {children}
    </ListLayoutContext.Provider>
  )
}

export function useListLayout() {
  const context = useContext(ListLayoutContext)
  if (!context) {
    throw new Error('useListLayout must be used within a ListLayoutProvider')
  }
  return context
}