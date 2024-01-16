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

    /* 
     - creo un nuovo array con 9 elementi vuoto
     - riempio ogni elemento dell'array con il valore null
    */
    const [squares, setSquares] = useState(Array(9).fill(null));

    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
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
