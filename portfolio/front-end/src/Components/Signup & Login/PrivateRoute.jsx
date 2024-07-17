// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Auth'; // Adjust the path as per your file structure

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? 
   element
    
   : 
    <Navigate to="/login" />
  ;
};

export default PrivateRoute;
