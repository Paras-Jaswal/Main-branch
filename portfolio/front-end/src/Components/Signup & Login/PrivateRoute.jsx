// PrivateRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { isAuthenticated } from './auth'; // Adjust the path as per your file structure

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
