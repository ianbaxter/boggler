import React, { useState, useEffect } from "react";
import diceBag from "./diceBag";
import "./App.css";
import Timer from "../Timer/Timer";

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(newBoard(diceBag.sixBySixDice));
  }, []);

  const newBoard = (dice) => {
    const emptyBoard = Array.from({ length: dice.length }, () =>
      Math.floor(Math.random() * 6)
    );

    const board = emptyBoard.map((value, idx) => dice[idx][value]);

    shakeDice(board);

    function shakeDice(array) {
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

  const changeBoardSize = (e) => {
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
        setBoard(newBoard(diceBag.fiveByFiveDice));
        break;
    }
  };

  const pasteBoard = (e) => {
    e.preventDefault();
    const codedBoard = e.target.userInput.value.split(/(?=[A-Z#])/);
    const decodedBoard = codedBoard.map((value) => {
      if (value === "#" || value.length === 2) {
        return value;
      } else if (value === "A") return "Z";
      return String.fromCharCode(value.charCodeAt(0) - 1);
    });
    if (decodedBoard.length === board.length) setBoard(decodedBoard);
  };

  const copyBoard = (e) => {
    let secretBoard = board.map((value) => {
      if (value === "#" || value.length === 2) {
        return value;
      } else if (value === "Z") return "A";
      return String.fromCharCode(value.charCodeAt(0) + 1);
    });
    let copyText = secretBoard.join("");
    let tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.value = copyText;
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="options">
          <button onClick={resetBoard}>Shuffle</button>
          <button onClick={copyBoard}>Copy</button>
          <form onSubmit={pasteBoard}>
            <input
              id="userInput"
              type="textarea"
              placeholder="Enter Code"
            ></input>
          </form>
          <select
            name="board-size-selection"
            onChange={changeBoardSize}
            defaultValue="sixBySixDice"
          >
            <option value="fourByFOurDice">4x4</option>
            <option value="fiveByFiveDice">5x5</option>
            <option value="sixBySixDice">6x6</option>
          </select>
        </div>
        <Timer />
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
              // <Dice  value={value}></Dice>
              <div key={index} className="dice-container">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
