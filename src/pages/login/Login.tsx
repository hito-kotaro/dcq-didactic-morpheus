import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPanel from '../../components/org/LoginPanel/LoginPanel';
import SignUpPanel from '../../components/org/LoginPanel/SignUpPanel';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const changePanel = () => {
    setIsSignUp(!isSignUp);
    console.log(isSignUp);
  };

  return (
    <div className="">
      {isSignUp ? (
        <SignUpPanel changePanel={changePanel} />
      ) : (
        <LoginPanel changePanel={changePanel} />
      )}
      <button type="button" onClick={() => navigate('/home')}>
        toHome
      </button>
    </div>
  );
};

export default Login;
