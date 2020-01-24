import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import MainContainer from "./components/MainContainer";

const Main = () => (
    <main>
        <div className="container-fluid search_table_container">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/administration" component={ MainContainer } />
            </Switch>
        </div>
    </main>
);

export default Main;
