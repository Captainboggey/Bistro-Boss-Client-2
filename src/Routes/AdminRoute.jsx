import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth()
    const [isAdmin,isAdminLoading]=useAdmin()
    const location = useLocation()
    if(loading||isAdminLoading){
        return <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
    </>
    }
    if(user && isAdmin){
        return children;
    }
   return <Navigate to={'/'} state={{from: location}} replace></Navigate>
    
};

export default AdminRoute;