import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPanel from '../../components/org/LoginPanel/LoginPanel';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const changePanel = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="">
      <LoginPanel />
      <button type="button" onClick={() => navigate('/home')}>
        toHome
      </button>
    </div>
  );
};

export default Login;
