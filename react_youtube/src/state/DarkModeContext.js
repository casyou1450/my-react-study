import { createContext, useContext, useReducer } from 'react'
import { darkModeReducer } from './darkModeReducer'

const DarkModeContext = createContext()

const initialState = {
  isDarkMode: false
}

export function DarkModeProvider({ children }) {
  const [state, dispatch] = useReducer(darkModeReducer, initialState)

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' })
  }

  return (
    <DarkModeContext.Provider value={{
      isDarkMode: state.isDarkMode,
      toggleDarkMode
    }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}