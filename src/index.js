import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App/App";
import store from "./redux/store";
import "./global.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
