//일기 목록 컴포넌트 - 여러 일기 아이템들을 보여주는 리스트 컴포넌트
import Button from './Button'
import '../assets/css/dairylist.css'
import DiaryItem from './DiaryItem'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const DiaryList = ({data}) => {
    //페이지 이동을 위한 navigate 함수
    const nav = useNavigate();
    //정렬 타입을 관리하는 state - 기본값은 최신순
    const [sortType, setSortType] = useState('latest');
    
    //정렬 타입 변경 핸들러 - select 값이 바뀔 때마다 호출됨
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    
    //정렬된 데이터를 반환하는 함수 - 원본 데이터를 복사해서 정렬
    const getSortedData = () => {
        return [...data].sort((a, b) => {       
            //최신순이면 내림차순 정렬 (최신 날짜가 위로)
            if (sortType === 'latest') {
                return Number(b.createDate - a.createDate);
            } else {
                //오래된 순이면 오름차순 정렬 (오래된 날짜가 위로)
                return Number(a.createDate - b.createDate);
            }
        });
    }
    
    //정렬된 데이터를 변수에 저장
    const runSort=getSortedData()
    
    return (
        <div className="DiaryList">
          {/*메뉴 바 - 정렬 옵션과 새 일기 쓰기 버튼*/}
          <div className="menu_bar">
            {/*정렬 선택 드롭다운 - 최신순/오래된 순 선택 가능, 값 변경 시 onChangeSortType 호출*/}
            <select value={sortType} onChange={onChangeSortType}>   
              <option value={"latest"}>최신순</option>
              <option value={"oldest"}>오래된 순</option>
            </select>
            {/*새 일기 쓰기 버튼 - 클릭 시 새 일기 작성 페이지로 이동*/}
            <Button
              onClick={() => nav("/new")}
              text={"새 일기 쓰기"}
              type={"CONTROL"}
            />
          </div>
          {/*일기 리스트 래퍼 - 정렬된 데이터를 map으로 DiaryItem 컴포넌트들로 변환*/}
          <div className="list_wrapper">
            {runSort.map((item) => (
                <DiaryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      );
};

export default DiaryList;