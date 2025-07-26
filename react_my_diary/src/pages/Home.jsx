//홈페이지 컴포넌트 - 일기 목록을 보여주는 메인 페이지
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { useState, useContext } from 'react'
import { DiaryStateContext } from '../App'

//월별 데이터 필터링 함수 - 특정 월의 일기만 가져오는 함수
const getMonthlyData = (pivotDate, data) => {
  //월의 시작 시간 계산 - 해당 월의 1일 00:00:00
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  //월의 끝 시간 계산 - 해당 월의 마지막 날 23:59:59
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  //필터링해서 해당 월의 일기만 반환
  return data.filter(
    (item) =>
      beginTime <= item.createDate && item.createDate <= endTime
  );
};

const Home = () => {
  //현재 선택된 월을 관리하는 state - 기본값은 현재 날짜
  const [pivot, setPivot] = useState(new Date())
  //context에서 일기 데이터 가져오기
  const data = useContext(DiaryStateContext)
  //현재 선택된 월의 일기 데이터만 필터링해서 가져오기
  const monthlyData = getMonthlyData(pivot, data);

  //다음 달로 이동하는 함수 - 월을 1 증가시켜서 새로운 Date 객체 생성
  const increaseMonth = () => {
    setPivot(new Date(pivot.getFullYear(), pivot.getMonth() + 1, 1))
  };
  //이전 달로 이동하는 함수 - 월을 1 감소시켜서 새로운 Date 객체 생성
  const decreaseMonth = () => {
    setPivot(new Date(pivot.getFullYear(), pivot.getMonth() - 1, 1))
  };
  
  return (
    <div>
      {/*헤더 컴포넌트 - 제목과 월 이동 버튼들*/}
      <Header title={`${pivot.getFullYear()}년 ${pivot.getMonth() + 1}월`}
        leftButton={<Button text="<" onClick={decreaseMonth} />}
        rightButton={<Button text=">" onClick={increaseMonth} />} />
      {/*일기 목록 컴포넌트 - 필터링된 월별 데이터 전달*/}
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home 