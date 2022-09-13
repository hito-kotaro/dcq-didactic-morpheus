import React from 'react';
import { TextField, Button } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const CreateUserForm = () => {
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  return (
    <div className="flex">
      <div className="w-1/2">新しいユーザーを作成する</div>
      <div className="w-1/2">
        <TextField
          fullWidth
          type="text"
          label="ユーザー名"
          variant="outlined"
          onChange={userHandler.onChange}
          value={userHandler.value}
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
        <Button variant="contained">新しいユーザーを作成</Button>
      </div>
    </div>
  );
};

export default CreateUserForm;
