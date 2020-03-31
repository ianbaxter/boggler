import React from "react";
import "./Timer.css";

const Timer = ({
  timer,
  setTimer,
  timerStart,
  setTimerStart,
  playing,
  setPlaying,
  intervalId,
  setIntervalId,
  isTimeUp,
  setIsTimeUp
}) => {
  const setTimerTo = e => {
    let newTimer = e.target.value;
    setTimer(newTimer);
    setTimerStart(newTimer);
  };

  const startCountdown = () => {
    if (!playing) {
      setPlaying(true);
      let seconds = timer.split(":")[0] * 60 + timer.split(":")[1] * 1;
      let newIntervalId = setInterval(() => {
        if (seconds > 0) {
          seconds--;
          let newTimer =
            "0" +
            Math.floor(seconds / 60) +
            ":" +
            (seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60));
          setTimer(newTimer);
        } else {
          clearInterval(intervalId);
          setIsTimeUp(true);
        }
      }, 10);
      setIntervalId(newIntervalId);
    } else if (playing) {
      setPlaying(false);
      clearInterval(intervalId);
      setTimer(timerStart);
      if (isTimeUp) setIsTimeUp(false);
    }
  };

  let countdownClassName = "counddown";
  if (isTimeUp) countdownClassName += " countdown__time-up";

  return (
    <div className="timer-container">
      <button onClick={startCountdown}>{playing ? "Reset" : "Start"}</button>
      <div></div>
      {playing ? (
        <p className={countdownClassName}>
          <b>{timer}</b>
        </p>
      ) : (
        <select onChange={setTimerTo} defaultValue={timerStart}>
          <option vlaue="60">01:00</option>
          <option vlaue="90">01:30</option>
          <option vlaue="120">02:00</option>
          <option vlaue="180">03:00</option>
          <option vlaue="240">04:00</option>
          <option vlaue="300">05:00</option>
        </select>
      )}
    </div>
  );
};

export default Timer;
