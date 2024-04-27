import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent";
import Container from 'react-bootstrap/Container';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBarComponent />
      <div>Content</div>
    </Container>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
