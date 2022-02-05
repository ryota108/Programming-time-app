import { createStore } from "redux";

const timeReducer = (state = { time: 0 }, action) => {
  if (action.type === "30min") {
    return { time: state.time + 0.5 };
  }
  if (action.type === "1h") {
    return { time: state.time + 1 };
  }
  if (action.type === "inputValue") {
    return { time: state.time + action.time };
  }
  if (action.type === "clear") {
    return { time: 0 };
  }
  return state;
};

const store = createStore(timeReducer);

export default store;
