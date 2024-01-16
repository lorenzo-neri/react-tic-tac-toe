import { useState } from 'react';
import './App.css';

function App() {

  /* FUNZIONE CHE SI SCATENA AL CLICK SUL BOTTONE */
  function handleClick() {
    console.log('click');
  }

  const [value, setValue] = useState(null);

  /* COMPONENTE SQAURE*/
  function Square({ value }) {


    return <button onClick={handleClick} className='square'>{value}</button>
  }

  /* COMPONENTE BOARD (CHE RACCHIUDE PIù COMPONENTI SQAURE) */
  function Board() {
    return (
      <>
        <div className="board-row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
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
