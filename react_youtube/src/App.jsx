import { useReducer, useState } from 'react'
import { darkModeReducer, initialState } from './state/darkModeReducer'
import { DarkModeContext } from './state/DarkModeContext';
import { KeywordContext } from './state/KeywordContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Layout from './components/common/Layout';


function App() {
  const [state,dispatch] = useReducer(darkModeReducer,initialState)
  const [search,setSearch]=useState('');
  return (
    <DarkModeContext.Provider value={{state,dispatch}}>
      <KeywordContext.Provider value={{search,setSearch}}>
        <div className={`wrap ${state.isDarkMode ? 'dark' : ''}`}>
          <Header></Header>
          <Layout></Layout>
          <Footer></Footer>
        </div>
      </KeywordContext.Provider>
    </DarkModeContext.Provider>
  )
}

export default App