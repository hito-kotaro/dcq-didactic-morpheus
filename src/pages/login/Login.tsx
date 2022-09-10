import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="h-10" />
      <div className=" h-3/4 min-h-500 w-2/6 min-w-400 bg-white ml-auto mr-10 rounded-xl drop-shadow-lg">
        <div className="text-center">Logo</div>

        <div className="h-12">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="h-12">
          <TextField
            id="outlined-password-input"
            label="userName"
            type="text"
            autoComplete="current-password"
          />
        </div>
        <div className="h-12">
          <TextField
            id="outlined-password-input"
            label="account"
            type="text"
            autoComplete="current-password"
          />
        </div>
        <div className="flex justify-end px-5">
          <Button variant="contained">Login</Button>
        </div>
      </div>
      <button type="button" onClick={() => navigate('/home')}>
        toHome
      </button>
    </div>
  );
};

export default Login;
