import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-base h-screen">
      <div className="h-10" />
      <div className=" h-3/4 w-2/6 bg-white ml-auto mr-10 rounded-xl drop-shadow-lg">
        <div className="text-center">Logo</div>
      </div>
      <button type="button" onClick={() => navigate('/home')}>
        toHome
      </button>
    </div>
  );
};

export default Login;
