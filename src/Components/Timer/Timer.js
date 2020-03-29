import React from "react";
import "./Timer.css";

const Timer = ({ timerTime, setTimer }) => {
  const setTimerTo = e => {
    let newTimer = e.target.value;
    setTimer(newTimer);
  };

  const startCountdown = () => {
    console.log("started");
  };

  return (
    <div className="timer-container">
      <button onClick={startCountdown}>Start</button>
      <p>Timer: {timerTime}</p>
      <select onChange={setTimerTo}>
        <option vlaue="60">01:00</option>
        <option vlaue="90">01:30</option>
        <option vlaue="120">02:00</option>
        <option vlaue="180">03:00</option>
        <option vlaue="240">04:00</option>
      </select>
    </div>
  );
};

export default Timer;
