import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInputForm from '../../hooks/InputForm/useInputForm';

const Login = () => {
  const navigate = useNavigate();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const tenantHandler = useInputForm();

  return (
    <div className="">
      <div className="h-10" />
      <div className=" h-3/4 min-h-500 w-2/6 min-w-400 bg-white ml-auto mr-10 rounded-xl drop-shadow-lg">
        <div className="text-center">Logo</div>

        <div className="h-10" />

        <div className="w-2/3 mx-auto">
          <div className="">
            <TextField
              fullWidth
              type="text"
              label="テナント名"
              variant="outlined"
              onChange={tenantHandler.onChange}
              value={tenantHandler.value}
            />
          </div>

          <div className="h-8" />

          <div className="">
            <TextField
              fullWidth
              type="text"
              label="user"
              variant="outlined"
              onChange={userHandler.onChange}
              value={userHandler.value}
            />
          </div>

          <div className="h-8" />

          <div className="">
            <TextField
              fullWidth
              type="password"
              label="password"
              variant="outlined"
              onChange={tenantHandler.onChange}
              value={tenantHandler.value}
            />
          </div>
          <div className="h-10" />

          <div className="flex justify-center">
            <Button variant="contained">Login</Button>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => navigate('/home')}>
        toHome
      </button>
    </div>
  );
};

export default Login;
