import React, { useState, useEffect } from "react";
import diceBag from "./diceBag";
import "./App.css";
import Dice from "../Dice/Dice";
import Timer from "../Timer/Timer";

function App() {
  const [gameBoard, setGameBoard] = useState([]);
  const [timer, setTimer] = useState("00:00");

  useEffect(() => {
    setGameBoard(createNewBoard(diceBag.fourByFOurDice));
  }, []);

  const createNewBoard = dice => {
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
    gameBoard.length === 16
      ? setGameBoard(createNewBoard(diceBag.fourByFOurDice))
      : gameBoard.length === 25
      ? setGameBoard(createNewBoard(diceBag.fiveByFiveDice))
      : setGameBoard(createNewBoard(diceBag.sixBySixDice));
  };

  const changeBoardSize = e => {
    let boardSize = e.target.value;
    switch (boardSize) {
      case "fourByFOurDice":
        setGameBoard(createNewBoard(diceBag.fourByFOurDice));
        break;
      case "fiveByFiveDice":
        setGameBoard(createNewBoard(diceBag.fiveByFiveDice));
        break;
      case "sixBySixDice":
        setGameBoard(createNewBoard(diceBag.sixBySixDice));
        break;
      default:
        setGameBoard(createNewBoard(diceBag.fourByFOurDice));
        break;
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <Timer timerTime={timer} setTimer={setTimer}></Timer>
        <div
          className={
            gameBoard.length === 16
              ? "board-container four-by-four-board"
              : gameBoard.length === 25
              ? "board-container five-by-five-board"
              : "board-container six-by-six-board"
          }
        >
          {gameBoard.map((value, index) => (
            <Dice key={index} value={value}></Dice>
          ))}
        </div>
        <div className="game-options">
          <button onClick={resetBoard}>Shuffle</button>
          <select name="board-size-selection" onChange={changeBoardSize}>
            <option value="fourByFOurDice">4x4</option>
            <option value="fiveByFiveDice">5x5</option>
            <option value="sixBySixDice">6x6</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
