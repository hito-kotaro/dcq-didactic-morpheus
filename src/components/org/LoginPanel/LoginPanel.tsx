import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import sampleLogo from '../../../images/LoginLogo.svg';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useLogin from '../../../hooks/Login/useLogin';

const LoginPanel = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const tenantHandler = useInputForm();
  const { login, signUp } = useLogin();

  return (
    <div>
      <div className="h-10" />
      <div className=" h-3/4 min-h-600 max-h-600  w-2/6 min-w-400 max-w-400 bg-white ml-auto mr-10 rounded-xl drop-shadow-lg">
        <div className="h-5" />

        <div className="flex justify-center">
          <img src={sampleLogo} alt="sampleLogo" />
        </div>

        <div className="h-10" />

        <div className="w-2/3 mx-auto">
          <div className="">
            <TextField
              fullWidth
              type="text"
              label={isSignUp ? '新しいテナント名' : 'テナント名'}
              variant="outlined"
              onChange={tenantHandler.onChange}
              value={tenantHandler.value}
            />
          </div>

          <div className="h-8" />

          <div className={isSignUp ? 'hidden' : ''}>
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
              label={isSignUp ? '新しいテナントのパスワード' : 'パスワード'}
              variant="outlined"
              onChange={pwdHandler.onChange}
              value={pwdHandler.value}
            />
          </div>
          <Button variant="text" onClick={() => setIsSignUp(!isSignUp)}>
            新しいテナントを作成
          </Button>
          <div className="h-10" />
          <div className="flex justify-center">
            <Button
              variant="contained"
              onClick={
                isSignUp
                  ? () => signUp(tenantHandler.value, pwdHandler.value)
                  : () =>
                      login(
                        tenantHandler.value,
                        userHandler.value,
                        pwdHandler.value,
                      )
              }
            >
              {isSignUp ? '新しいテナントの作成' : 'ログイン'}
            </Button>
          </div>
        </div>
        <div className="h-10" />
        <Button variant="text">パスワードを忘れましたか？</Button>
      </div>
    </div>
  );
};
export default LoginPanel;
