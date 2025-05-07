
import './TicTacToe.css';
import circle_icon from '../Assets/tick1.jpg';
import cross_icon from '../Assets/download.jpg';
import React, {useState, useRef} from 'react';

const TicTacToe = () => {
  const [data, setData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);


  const toggle = (index) => {
    if (lock || data[index] !== "") return;

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    checkWin(newData);
  };

  const resetGame = () => {
    setData(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner(null);
  };

  const getIcon = (value) => {
    if (value === "x") return <img src={cross_icon} alt="X" />;
    if (value === "o") return <img src={circle_icon} alt="O" />;
    return null;
  };

  const checkWin = (data) =>{
    if (data[0] ===data[1] && data[1]===data[2] && data[2]!=="")
    {
      won(data[2]);
    }
    else if (data[3] ===data[4] && data[4]===data[5] && data[5]!=="")
    {
      won(data[5]);
    }
    else if (data[6] ===data[7] && data[7]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }
    else if (data[0] ===data[3] && data[3]===data[6] && data[6]!=="")
      {
        won(data[6]);
      }
    else if (data[1] ===data[4] && data[4]===data[7] && data[7]!=="")
      {
        won(data[7]);
      }
      else if (data[2] ===data[5] && data[5]===data[8] && data[8]!=="")
        {
          won(data[8]);
        }
      else if (data[0] ===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
      else if (data[0] ===data[1] && data[1]===data[2] && data[2]!=="")
        {
          won(data[2]);
        }
        else if (data[2] ===data[4] && data[4]===data[6] && data[6]!=="")
          {
            won(data[6]);
          }
  }
const won = (winner) => {
  setLock(true);
  setWinner(winner)
}

const reset = () =>{
  setLock(false);
}

  return (
    <div className="container">
      <h1 className="title">
        {winner ? (
    <>
      Congratulations:{" "}
      <img
        src={winner === "x" ? cross_icon : circle_icon}
        alt={winner}
        width="30"
      />{" "}
      wins!
    </>
  ) : (
    <>Tic Tac Toe Game In <span>React</span></>
  )}
</h1>

      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className={`row${row + 1}`} key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <div className="boxes" key={index} onClick={() => toggle(index)}>
                  {getIcon(data[index])}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
