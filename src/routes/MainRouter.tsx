import React, { Fragment } from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from '../Views/Home';


const MainRouter = (): JSX.Element=>(
    <Fragment>
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    </Fragment>
)






export default MainRouter;