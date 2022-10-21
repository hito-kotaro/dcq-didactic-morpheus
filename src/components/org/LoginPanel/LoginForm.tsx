import { TextField, Button } from '@mui/material';
import React, { ReactElement, VFC } from 'react';
import useLoginApi from '../../../hooks/Api/useLoginApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import AdminLoginForm from './AdminLoginForm';
import SignUpForm from './SignUpForm';

type Props = {
  chComponent: (e: ReactElement) => void;
};

const LoginForm: VFC<Props> = (props) => {
  const { chComponent } = props;
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const tenantHandler = useInputForm();
  const { login } = useLoginApi();
  return (
    <>
      <div className="text-text font-semibold text-lg text-center">
        ログイン
      </div>
      <div className="h-5" />
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
            label="ユーザ名"
            variant="outlined"
            onChange={userHandler.onChange}
            value={userHandler.value}
          />
        </div>

        <div className="">
          <div className="h-8" />
          <TextField
            fullWidth
            type="password"
            label="パスワード"
            variant="outlined"
            onChange={pwdHandler.onChange}
            value={pwdHandler.value}
          />
        </div>

        <Button
          variant="text"
          onClick={() => chComponent(<SignUpForm chComponent={chComponent} />)}
        >
          新しいテナントを作成
        </Button>
        <Button
          variant="text"
          onClick={() =>
            chComponent(<AdminLoginForm chComponent={chComponent} />)
          }
        >
          テナント管理アカウントでログイン
        </Button>

        <div className="h-5" />
        <div className="flex justify-center">
          <Button
            variant="contained"
            onClick={() =>
              login(tenantHandler.value, userHandler.value, pwdHandler.value)
            }
          >
            ログイン
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
