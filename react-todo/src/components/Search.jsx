import React from 'react'

function Search({className, handleSearch}) {
  return (
    <div className={className}>
      <input 
        type="text" 
        placeholder="할 일을 검색해주세요." 
        onChange={(e) => {
          console.log('검색어:', e.target.value)
          handleSearch(e.target.value)
        }}
      />
    </div>
  )
}

export default Search