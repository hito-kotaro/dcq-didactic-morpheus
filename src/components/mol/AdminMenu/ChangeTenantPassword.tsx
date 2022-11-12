import { Button, TextField } from '@mui/material';
import React from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import AdminMenuTemplate from '../../templates/AdminMenuTemplate';

const ChangeTenantPassword = () => {
  const currentPwdHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();

  return (
    <AdminMenuTemplate title="テナントパスワート度変更する">
      <>
        <TextField
          fullWidth
          type="password"
          label="現在のパスワード"
          variant="outlined"
          onChange={currentPwdHandler.onChange}
          value={currentPwdHandler.value}
        />
        <div className="h-3" />
        <TextField
          fullWidth
          type="password"
          label="パスワード"
          variant="outlined"
          onChange={pwdHandler.onChange}
          value={pwdHandler.value}
        />
        <div className="h-3" />
        <TextField
          fullWidth
          type="password"
          label="パスワード再入力"
          variant="outlined"
          onChange={rePwdHandler.onChange}
          value={rePwdHandler.value}
        />

        <div className="h-3" />

        <Button variant="contained">パスワードを変更</Button>
      </>
    </AdminMenuTemplate>
  );
};

export default ChangeTenantPassword;
