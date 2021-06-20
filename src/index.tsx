import React from "react";
import ReactDOM from "react-dom";

import "./Assets/css/utils.css";
import "./Assets/css/navbar.css";
import "./Assets/css/welcome.css";
import "./Assets/css/mobile.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AnimationTesting from "./Layouts/Demo/AnimationTesting";
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AnimationTesting /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
