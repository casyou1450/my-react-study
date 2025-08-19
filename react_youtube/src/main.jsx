import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './css/reset.css'
import './css/layout.css'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5,
      cacheTime:1000*60*10,
    }
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)