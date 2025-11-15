import React, { Children, use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({Children}) => {

    const {user}=use(AuthContext)

    if(user){
       return Children
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;