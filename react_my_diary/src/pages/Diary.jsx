import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  return (
    <>
      <div>Diary {params.id} 번 일기 입니다.</div>
      <Button text="수정하기" type="CONTROL" onClick={() => navigate(`/edit/${params.id}`)} />
    </>
    
  )
}

export default Diary