import "./time.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Time = (props) => {
  const [clickedTime, setClickedTime] = useState("");
  const dispatch = useDispatch();

  const time = useSelector((state) => state.time);
  let barFill = "0%";

  barFill = Math.round((time / 1.7) * 100) + "%";

  const getTimeHandler = () => {
    let now = new Date();
    let time = now.getHours() + ":" + now.getMinutes();
    setClickedTime(time);
  };
  const thirtyMinHandler = () => {
    dispatch({ type: "30min" });
    getTimeHandler();
  };
  const oneHourIncrementHandler = () => {
    dispatch({ type: "1h" });
    getTimeHandler();
  };
  const clearHandler = () => {
    dispatch({ type: "clear" });
  };

  return (
    <>
      <div className="box">
        <h1 className="title">Programing Time</h1>
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              style={{ strokeDashoffset: barFill }}
              cx="70"
              cy="70"
              r="70"
            ></circle>
          </svg>
          <div className="number">
            <h2>
              {time}
              <span>h</span>
            </h2>
          </div>
        </div>
        <div className="btn-area">
          <button className="btn btn-rounded" onClick={thirtyMinHandler}>
            30min
          </button>
          <button className="btn btn-rounded" onClick={oneHourIncrementHandler}>
            1hour
          </button>
          <button className="btn btn-rounded" onClick={clearHandler}>
            clear
          </button>
          <p>{clickedTime}</p>
        </div>
      </div>
    </>
  );
};
export default Time;
