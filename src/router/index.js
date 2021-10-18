import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../components/style/custom.css";
import PrivateRoute from "../router/privateroute";

import Login from "../components/login";
import Home from '../components/home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
