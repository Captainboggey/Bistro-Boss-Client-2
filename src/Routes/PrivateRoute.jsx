import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
const location = useLocation();
    if(user){
        return children;
    }
    if(loading){
        <progress className="progress w-56"></progress>
    }
    return <Navigate state={{from:location}} replace to={'/login'}></Navigate>
};

export default PrivateRoute;