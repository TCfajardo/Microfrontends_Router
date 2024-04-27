import React from "react";
import ReactDOM from "react-dom";
import AboutComponent from "./components/AboutComponent";

import "./index.css";

const App = () => (
  <div className="container">
    <AboutComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
