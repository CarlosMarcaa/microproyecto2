import React from 'react'
import {SearchResult} from './SearchResult'
import "../styles/SearchResultList.css"
import Buscador from './todo.json'

export const SearchResultList = () => {
  return (
    <div className='results-list'>
        {Buscador.map((result, id) => {
            return <SearchResult result={result} key={id}/>
        })}
    </div>
  )
}

export default SearchResultList
