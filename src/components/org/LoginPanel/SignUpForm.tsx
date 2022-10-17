import { TextField, Button } from '@mui/material';
import React, { ReactElement, VFC } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import AdminLoginForm from './AdminLoginForm';
import LoginForm from './LoginForm';

type Props = {
  chComponent: (e: ReactElement) => void;
};

const SignUpForm: VFC<Props> = (props) => {
  const { chComponent } = props;
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const tenantHandler = useInputForm();
  return (
    <>
      <div className="text-text font-semibold text-lg text-center">
        新規テナント作成
      </div>
      <div className="h-5" />
      <div className="w-2/3 mx-auto">
        <div className="">
          <TextField
            fullWidth
            type="text"
            label="新しいテナント名"
            variant="outlined"
            onChange={tenantHandler.onChange}
            value={tenantHandler.value}
          />
        </div>

        <div className="h-8" />
        <div className="">
          <TextField
            fullWidth
            type="password"
            label="新しいパスワード"
            variant="outlined"
            onChange={pwdHandler.onChange}
            value={pwdHandler.value}
          />
        </div>
        <div className="h-8" />
        <div className="">
          <TextField
            fullWidth
            type="password"
            label="新しいパスワード再入力"
            variant="outlined"
            onChange={rePwdHandler.onChange}
            value={rePwdHandler.value}
          />
        </div>
        <Button
          variant="text"
          onClick={() => chComponent(<LoginForm chComponent={chComponent} />)}
        >
          ユーザでログイン
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
          <Button variant="contained" onClick={() => console.log('signup')}>
            サインアップ
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
