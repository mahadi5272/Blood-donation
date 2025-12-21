 import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading,roleLoading,userStatus } = UseAuth();
  const navigate = useNavigate()

  if (loading||roleLoading) return <p>Loading ...</p>;
  if (!user||!userStatus =='Active') return navigate("/login");

  return children;
};

export default PrivateRoute;
