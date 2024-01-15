import { useState } from 'react'
import './App.css'

function App() {

  function Square() {
    return <button className='square'>1</button>
  }

  function Board() {
    return (
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }


  return (
    <>
      <Board />
    </>
  )
}
export default App
