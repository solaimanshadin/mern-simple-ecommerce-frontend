import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children , ...rest}) => {
    const isLogged = localStorage.getItem("token")
    return (
        isLogged ?
        <Route
            {...rest}
        >
            {children}
        </Route>
        :
        <Redirect to="/login"></Redirect>        
    );
};

export default PrivateRoute;