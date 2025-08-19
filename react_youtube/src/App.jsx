import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Video from './pages/Video'
import Watch from './pages/Watch'
import { DarkModeProvider } from './state/DarkModeContext'
import { SearchProvider } from './state/SearchContext'
import { ListLayoutProvider } from './state/ListLayoutContext'
import './App.css'

function App() {
  return (
    <DarkModeProvider>
      <SearchProvider>
        <ListLayoutProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Video />} />
                <Route path="/watch" element={<Watch />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ListLayoutProvider>
      </SearchProvider>
    </DarkModeProvider>
  )
}

export default App