/* 
In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.
 */
import { useState } from 'react';
import './App.css';

function App() {


  /* COMPONENTE SQAURE*/
  function Square({ value, onSquareClick }) {

    /* const [value, setValue] = useState(null); */

    return <button onClick={onSquareClick} className='square'>{value}</button>
  }


  /* COMPONENTE BOARD (CHE RACCHIUDE PIù COMPONENTI SQAURE) */
  function Board() {

    /* 
     - creo un nuovo array con 9 elementi vuoto
     - riempio ogni elemento dell'array con il valore null
    */
    const [squares, setSquares] = useState(Array(9).fill(null));

    const [oIsNext, setOIsNext] = useState(true);

    /* FUNZIONE CHE SI SCATENA AL CLICK SUL BOTTONE */
    function handleClick(i) {
      console.log('click');

      if (squares[i]) {
        return;
      }

      const nextSquares = squares.slice();

      if (oIsNext) {
        nextSquares[i] = 'O';
      } else {
        nextSquares[i] = 'X';
      }

      setSquares(nextSquares);
      setOIsNext(!oIsNext);
    }


    return (
      <>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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
