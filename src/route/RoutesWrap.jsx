//페이지 라우터 설정 
import { Routes, Route, Navigate } from "react-router-dom"
import Main from '../pages/Main'
import Video from '../pages/Video'
import Watch from '../pages/Watch'
import NotFound from '../pages/NotFound'

const Wrap = () =>{

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Navigate to='/' replace />} />
        <Route path='/video' element={<Video />} />
        <Route path='/video/watch/:id' element={<Watch />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default Wrap