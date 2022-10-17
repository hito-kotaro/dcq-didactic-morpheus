import React, { ReactElement, VFC } from 'react';
import { TextField, Button } from '@mui/material';
import useLoginApi from '../../../hooks/Api/useLoginApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

type Props = {
  chComponent: (e: ReactElement) => void;
};

const AdminLoginForm: VFC<Props> = (props) => {
  const { chComponent } = props;
  const pwdHandler = useInputForm();
  const tenantHandler = useInputForm();
  const { tenantLogin } = useLoginApi();
  return (
    <>
      <div className="text-text font-semibold text-lg text-center">
        テナントアカウントでログイン
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
          onClick={() => chComponent(<LoginForm chComponent={chComponent} />)}
        >
          ユーザアカウントでログイン
        </Button>
        <Button
          variant="text"
          onClick={() => chComponent(<SignUpForm chComponent={chComponent} />)}
        >
          新しいテナントを作成
        </Button>

        <div className="h-10" />
        <div className="flex justify-center">
          <Button
            variant="contained"
            onClick={() => tenantLogin(tenantHandler.value, pwdHandler.value)}
          >
            ログイン
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdminLoginForm;
