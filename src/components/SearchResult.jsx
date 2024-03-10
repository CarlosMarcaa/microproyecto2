import React from 'react'
import "../styles/SearchResult.css"

export const SearchResult = ({ result }) => {
  return (
    <div className='search-result' onClick={(e) => alert(`Has escogido ${result.name}`)}>{result.name}</div>
  )
};
