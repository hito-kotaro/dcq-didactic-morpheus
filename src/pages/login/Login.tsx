import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Login</div>
      <button type="button" onClick={() => navigate('/home')}>
        toHome
      </button>
    </>
  );
};

export default Login;
