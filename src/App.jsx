import { useReducer } from 'react'
import { darkModeReducer, initialState } from './state/darkModeReducer'
import { DarkModeContext } from './state/DarkModeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Layout from './components/common/Layout';


function App() {
  const [state,dispatch] = useReducer(darkModeReducer,initialState)
  return (
    <DarkModeContext.Provider value={{state,dispatch}}>
      <div className={`wrap ${state.isDarkMode ? 'dark' : ''}`}>
        <Header></Header>
        <Layout></Layout>
        <Footer></Footer>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App
