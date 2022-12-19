import React from "react";
import { legacy_createStore as createStore, bindActionCreators } from "redux";
import * as actions from "./redux/actions";
import reducer from "./redux/reducer";

const App = () => {
  const store = createStore(reducer);
  const { dispatch, getState, subscribe } = store;

  subscribe(() => {
    document.getElementById("counter").textContent = getState().value;
  });

  const { inc, dec, random } = bindActionCreators(actions, dispatch);

  document.getElementById("increment").addEventListener("click", inc);

  document.getElementById("decrement").addEventListener("click", dec);

  document.getElementById("random").addEventListener("click", () => {
    const randomValue = Math.floor(Math.random() * 100);
    random(randomValue);
  });

  return <div>App</div>;
};

export default App;
