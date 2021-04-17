import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Badges from "../pages/Badges";
import BadgeEdit from "../pages/BadgeEdit";
import BadgesNew from "../pages/BadgesNew";
import Layout from "./Layout";
import NoFound from "../pages/NoFound";
import Home from "./Home";
import RickAndMorty from "../pages/RickAndMorty";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

function App() {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route exact path='/rick-and-morty' component={RickAndMorty} />
                    <Route exact path='/badges/:badgeId' component={BadgeDetailsContainer}/>
                    <Route exact path='/badges/:badgeId/edit' component={BadgeEdit}/>
                    <Route component={NoFound} />} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
