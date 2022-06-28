import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-globally";

const initialState = {
  admin: false,
};

ReactDOM.render(
  <Provider globalState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
