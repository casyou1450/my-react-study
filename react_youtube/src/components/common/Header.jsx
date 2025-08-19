import { useContext, useState } from "react";
//다크모드 컨텍스트
import { DarkModeContext } from "../../state/DarkModeContext";
//검색 컨텍스트
import { KeywordContext } from "../../state/KeywordContext";
//라우터 설정
import { useNavigate } from "react-router-dom";
//컴포넌트
import Button from "../element/Button";

const Header = () => {
  //다크모드 컨트롤
  const { dispatch } = useContext(DarkModeContext);
  //네비게이터 페이지 이동
  const navigator = useNavigate();
  const goHome = () => {
    navigator("/");
  };
  //검색어 입력 설정
  //검색어 상태 변환 체크(입력 내용)
  const [keyword, setKeyword] = useState("");
  //검색어 입력 이벤트
  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  // 1. 검색어 컨텍스트에서 setSearch 함수를 가져옴
  // KeywordContext는 App.jsx에서 Provider로 감싸져 있고, value={{search, setSearch}}를 전달함
  // useContext(KeywordContext)로 {search, setSearch} 객체를 받아옴
  // 구조분해로 setSearch만 추출
  const { search, setSearch } = useContext(KeywordContext);

  // 2. 검색 버튼을 눌렀을 때 실행되는 함수
  const handleSearch = () => {
    // 2-1. setSearch(keyword) 실행
    // keyword는 useState로 관리되는 로컬 상태 (입력 필드의 값)
    // setSearch는 Context의 함수 (App.jsx의 useState에서 온 것)
    // setSearch(keyword)를 호출하면 App.jsx의 search 상태가 keyword 값으로 변경됨
    setSearch(keyword);
    console.log(search)

    // 2-2. navigator('/video') 실행
    // navigator는 useNavigate()의 반환값 (페이지 이동 함수)
    // '/video' 경로로 이동
    // 이때 App.jsx의 search 상태는 이미 keyword 값으로 업데이트됨
    navigator("/video");
  };

  // 3. 전체 흐름
  // 사용자가 검색어 입력 → keyword 상태에 저장
  // 검색 버튼 클릭 → handleSearch 실행
  // setSearch(keyword) → App.jsx의 search 상태를 keyword로 변경
  // navigator('/video') → Video 페이지로 이동
  // Video.jsx에서 useContext(KeywordContext)로 search 값 가져와서 검색 결과 표시

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 왼쪽: 로고 */}
          <div className="flex items-center">
            <button onClick={goHome} className="flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="text-xl font-bold">YouTube</span>
            </button>
          </div>

          {/* 중앙: 검색바 */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input type="text" placeholder="검색" className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" onChange={onSearch} value={keyword} />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button onClick={handleSearch} className="absolute inset-y-0 right-0 px-4 flex items-center bg-gray-100 dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 오른쪽: 메뉴 버튼들 */}
          <div className="flex items-center space-x-4">
            {/* 다크모드 토글 */}
            <Button text="🌙" onClick={() => dispatch({ type: "TOGGLE_MODE" })} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;