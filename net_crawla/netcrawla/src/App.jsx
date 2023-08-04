import { useState } from 'react'
import './App.css'
import SearchBar from './Component/SearchBar'

function App() {
  return (
    <>
      <div className='main-page'>
        Hello World!
        <div className='search-bar-container'>
          <SearchBar />
          <div>search reults</div>

        </div>
      </div>
    </>
  )
}

export default App
