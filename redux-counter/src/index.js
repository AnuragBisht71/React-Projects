import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { counterReducer, loginReducer } from "./redux/reducer";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

let rootReducer = combineReducers({
  count: counterReducer,
  logged: loginReducer,
});

let myStore = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
