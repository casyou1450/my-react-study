import { useParams } from 'react-router-dom'  

//영상 시청 페이지
const Watch = () =>{
  const params = useParams()
  return (
    <>
      {params.id}번 영상
    </>
  )
}
export default Watch