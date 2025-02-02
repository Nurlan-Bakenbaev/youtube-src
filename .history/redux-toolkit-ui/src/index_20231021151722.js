import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
ReactDOM.render(
    
  <React.StrictMode>
    <Provider store=></Provider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
