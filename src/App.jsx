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


  function ResetButton({ onResetClick }) {
    return (
      <button className="reset-button" onClick={onResetClick}>
        Reset Game
      </button>
    );
  }


  /* COMPONENTE BOARD (CHE RACCHIUDE PIù COMPONENTI SQAURE) */
  function Board() {

    /* 
     - creo un nuovo array con 9 elementi vuoto
     - riempio ogni elemento dell'array con il valore null
    */
    const [squares, setSquares] = useState(Array(9).fill(null));

    const [oIsNext, setOIsNext] = useState(true);

    const winner = calculateWinner(squares);
    let status;
    let statusClass = "status"; // Classe di base

    if (winner) {
      status = winner + ' is the winner! 🏆';
      statusClass += " winner";
    } else if (squares.every(square => square !== null)) {
      status = 'It\'s a draw!';
      statusClass += " draw"; //Aggiunge la classe 'draw' quando c'è un pareggio
    } else {
      status = 'Next player is ' + (oIsNext ? 'O' : 'X');
    }

    /* FUNZIONE CHE SI SCATENA AL CLICK SUL BOTTONE */
    function handleClick(i) {
      console.log('click');

      if (squares[i] || calculateWinner(squares)) {
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


    /* DICHIARIAMO IL VINCITORE */
    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        console.log(lines[i]);

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          console.log(squares[a]);
          return squares[a]
        }
      }
      return null;
    }


    function handleReset() {
      setSquares(Array(9).fill(null));
      setOIsNext(true);
    }


    return (
      <>

        <div className='board'>
          <h4 className={statusClass}>{status}</h4>


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

          <ResetButton onResetClick={handleReset} />
        </div>
      </>
    );
  }


  return (
    <>
      <h3 className='credits'>
        Game created with
        <img src="src/assets/react.svg" alt="" />
        and
        <img src="public/vite.svg" alt="" />
      </h3>
      {/* RICHIAMO IL COMPONENTE BOARD */}
      <Board />
    </>
  )
}
export default App
