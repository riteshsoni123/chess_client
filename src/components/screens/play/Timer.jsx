import React, { useEffect } from "react";

function Timer(props) {
  const { runTimer, countDown, setCountDown } = props;

  useEffect(() => {
    let timerId;

    if (runTimer) {
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer, setCountDown]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  return (
    <div>
      Time: {minutes}:{seconds}
    </div>
  );
}

export default Timer;
