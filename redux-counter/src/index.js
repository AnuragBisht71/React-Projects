import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer from "./redux/reducer";

import { configureStore } from "redux";
import { Provider } from "react-redux";

let myStore = configureStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
