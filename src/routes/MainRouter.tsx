import React, { Fragment } from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from '../Views/Home';
import PrivateRoute from '../Auth/PrivateRoute';
import SignIn from '../Views/SignIn';


const MainRouter = (): JSX.Element=>(
    <Fragment>
        <Switch>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Route exact path="/Acceso" component={SignIn}></Route>
        </Switch>
    </Fragment>
)






export default MainRouter;