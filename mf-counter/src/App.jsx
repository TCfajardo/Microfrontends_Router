import React from "react";
import ReactDOM from "react-dom";
import CounterMF from "./components/CounterMF";

import "./index.css";

const App = () => (
  <div className="container">
    <CounterMF initialCounter={10}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
