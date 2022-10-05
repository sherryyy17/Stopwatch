import React from "react";
import Timer from "./Timer";
import "./style.css";
import timeContext from "./timer-context";

const Stopwatch = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect(() => {
      let interval = null;
  
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!timerOn) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [timerOn]);
  
    return (
      <timeContext.Provider value = {time}>
      <div className="Timers">
        <h2>Stopwatch</h2>
        <Timer time={time}/>
  
        <div id="buttons">
          {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)}>Resume</button>
          )}
        </div>
      </div>
      </timeContext.Provider>
    );
}

export default Stopwatch;
  