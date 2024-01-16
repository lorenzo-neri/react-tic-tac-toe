import { useState } from 'react';
import './App.css';

function App() {


  /* COMPONENTE SQAURE*/
  function Square() {

    const [value, setValue] = useState(null);

    /* FUNZIONE CHE SI SCATENA AL CLICK SUL BOTTONE */
    function handleClick() {
      console.log('click');
      setValue('X');
    }

    return <button onClick={handleClick} className='square'>{value}</button>
  }


  /* COMPONENTE BOARD (CHE RACCHIUDE PIù COMPONENTI SQAURE) */
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
      {/* RICHIAMO IL COMPONENTE BOARD */}
      <Board />
    </>
  )
}
export default App
