import React, { Component } from 'react';
import {Route, Redirect,RouteProps} from 'react-router-dom';
import { getIsAuthenticated } from './index';


const PrivateRoute = ({component, ...rest}: any) => {


    const routeComponent = (props: any) => (
        getIsAuthenticated()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/Acceso'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
    
export default PrivateRoute;