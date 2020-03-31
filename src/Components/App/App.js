import React, { useState, useEffect } from "react";
import diceBag from "./diceBag";
import "./App.css";
import Dice from "../Dice/Dice";
import Timer from "../Timer/Timer";

function App() {
  const [board, setBoard] = useState([]);
  const [timer, setTimer] = useState("03:00");
  const [timerStart, setTimerStart] = useState("03:00");
  const [playing, setPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    setBoard(newBoard(diceBag.fourByFOurDice));
  }, []);

  const newBoard = dice => {
    const emptyBoard = Array.from(
      { length: dice.length },
      () => Math.floor(Math.random() * 5) // this ignores the u on the 'Qu' cube
    );

    const board = emptyBoard.map((value, idx) => dice[idx].charAt(value));

    shuffleArray(board);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    return board;
  };

  const resetBoard = () => {
    board.length === 16
      ? setBoard(newBoard(diceBag.fourByFOurDice))
      : board.length === 25
      ? setBoard(newBoard(diceBag.fiveByFiveDice))
      : setBoard(newBoard(diceBag.sixBySixDice));
  };

  const changeBoardSize = e => {
    let boardSize = e.target.value;
    switch (boardSize) {
      case "fourByFOurDice":
        setBoard(newBoard(diceBag.fourByFOurDice));
        break;
      case "fiveByFiveDice":
        setBoard(newBoard(diceBag.fiveByFiveDice));
        break;
      case "sixBySixDice":
        setBoard(newBoard(diceBag.sixBySixDice));
        break;
      default:
        setBoard(newBoard(diceBag.fourByFOurDice));
        break;
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="options">
          <button onClick={resetBoard}>Shuffle</button>
          <div></div>
          <select name="board-size-selection" onChange={changeBoardSize}>
            <option value="fourByFOurDice">4x4</option>
            <option value="fiveByFiveDice">5x5</option>
            <option value="sixBySixDice">6x6</option>
          </select>
        </div>
        <Timer
          timer={timer}
          setTimer={setTimer}
          timerStart={timerStart}
          setTimerStart={setTimerStart}
          playing={playing}
          setPlaying={setPlaying}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          isTimeUp={isTimeUp}
          setIsTimeUp={setIsTimeUp}
        ></Timer>
        <div className="box">
          <div
            className={
              board.length === 16
                ? "board board__four-by-four"
                : board.length === 25
                ? "board board__five-by-five"
                : "board board__six-by-six"
            }
          >
            {board.map((value, index) => (
              <Dice key={index} value={value}></Dice>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
