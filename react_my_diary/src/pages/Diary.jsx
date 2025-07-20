import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Diary = () => {
  const params = useParams();
  const navigate = useNavigate()
  const editDiary = (id) => {
    navigate('/edit')
  }
  return (
    <>
    <div>Diary {params.id} 번 일기 입니다.</div>
    <button onClick={editDiary}>{params.id}번 일기 수정</button>
    </>
    
  )
}

export default Diary