import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import AboutUs from '../home/AboutUs';

const AppRouter = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
        </Switch>   
    )
}

export default AppRouter;