import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CardsComponent from "./components/CardsComponents";
import DetailPage from "./components/DetailPages";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CardsComponent} />
            <Route path="/detail/:id" component={DetailPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
