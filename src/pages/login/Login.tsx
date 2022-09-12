import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../../components/atoms/InputForm/InputForm';
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

        <div className="h-12">
          <InputForm
            inputHandler={tenantHandler}
            placeholder="テナント名"
            color="bg-gray-200"
            rounded="rounded-lg"
            type="text"
          />
        </div>

        <div className="h-12">
          <InputForm
            inputHandler={userHandler}
            placeholder="ユーザ名"
            color="bg-gray-200"
            rounded="rounded-lg"
            type="text"
          />
        </div>

        <div className="h-12">
          <InputForm
            inputHandler={pwdHandler}
            placeholder="パスワード"
            color="bg-gray-200"
            rounded="rounded-lg"
            type="text"
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
