//일기 아이템 컴포넌트 - 개별 일기를 보여주는 카드 형태의 컴포넌트
import getEmo from '../util/get-emo'
import Button from './Button'
import '../assets/css/dailyitem.css'
import { useNavigate } from 'react-router-dom'  

const DiaryItem = ({content, createDate, emotionId, id}) => {
    //페이지 이동을 위한 navigate 함수
    const nav = useNavigate()
    
    return (
        <div className="DiaryItem">
            {/*일기 내용 클릭 시 상세 페이지로 이동하는 영역*/}
            <div onClick={() => nav(`/diary/${id}`)}>
                {/*감정 이미지 섹션 - emotionId에 따라 다른 이미지 표시*/}
                <div className={`img_section img_section_${emotionId}`}>
                    <img src={getEmo(emotionId)} />
                </div>
                {/*일기 정보 섹션 - 날짜와 내용 표시*/}
                <div className="info_section">
                    {/*생성 날짜 표시 - 타임스탬프를 한국 날짜 형식으로 변환*/}
                    <div className="created_date">
                        {new Date(createDate).toLocaleDateString()}
                    </div>
                    {/*일기 내용 표시*/}
                    <div className="content">{content}</div>
                </div>
            </div>
            {/*버튼 섹션 - 수정하기 버튼 클릭 시 편집 페이지로 이동*/}
            <div className="button_section">
                <Button text="수정하기" type="CONTROL" onClick={() => nav(`/edit/${id}`)}/>
            </div>
        </div>
    )
}

export default DiaryItem    