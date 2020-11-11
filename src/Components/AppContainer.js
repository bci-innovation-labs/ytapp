import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IndexContainer from "./IndexContainer";
import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";


class AppContainer extends Component {
    render() {
        return (
            <Router>
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/dashboard" exact component={DashboardContainer} />
                <Route path="/" exact component={IndexContainer} />
            </Router>
        );
    }
}

export default AppContainer;
