import { useState } from 'react'
import { useSearch } from '../../state/SearchContext'
import { useDarkMode } from '../../state/DarkModeContext'
import { useListLayout } from '../../state/ListLayoutContext'

function Header() {
  const { searchTerm, setSearchTerm } = useSearch()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const { isListView, toggleListView } = useListLayout()
  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchTerm(inputValue)
  }

  return (
    <header className="header">
      <div className="header-left">
        <h1>YouTube</h1>
      </div>
      <div className="header-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="검색"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      <div className="header-right">
        <button onClick={toggleListView}>
          {isListView ? '그리드' : '리스트'}
        </button>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? '라이트' : '다크'}
        </button>
      </div>
    </header>
  )
}

export default Header