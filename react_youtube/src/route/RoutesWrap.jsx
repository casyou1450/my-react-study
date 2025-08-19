import { Routes, Route } from 'react-router-dom'
import Video from '../pages/Video'
import Watch from '../pages/Watch'

const RoutesWrap = () => {
  return (
    <Routes>
      <Route path='/' element={<Video />} />
      <Route path='/video' element={<Video />} />
      <Route path='/video/watch/:id' element={<Watch />} />
    </Routes>
  )
}

export default RoutesWrap