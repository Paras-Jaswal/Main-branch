import React from 'react';
import { Navigate } from 'react-router-dom';

// Assuming you have a way to check if the user is authenticated
const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return !!localStorage.getItem('authToken');
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
