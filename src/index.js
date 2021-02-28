import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./routes/App";
import store from "./redux/store";
import "./global.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
