import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/styles.css";
import "./css/font-awesome.min.css";


const render = () => {
  ReactDOM.render(
    <HashRouter basename="/" >
      <App />
    </HashRouter>,
    document.getElementById("root")
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
