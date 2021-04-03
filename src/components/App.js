import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgesNew";
import Layout from "./Layout";
import NoFound from "../pages/NoFound";
import Home from "./Home";

function App() {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route component={NoFound} />}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
