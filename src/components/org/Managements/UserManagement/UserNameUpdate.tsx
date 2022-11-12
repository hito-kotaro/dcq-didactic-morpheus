import React, { VFC } from 'react';
import { Button, Divider, TextField } from '@mui/material';
import useInputForm from '../../../../hooks/InputForm/useInputForm';

type Props = {
  currentName: string;
};
const UserNameUpdate: VFC<Props> = (props) => {
  const { currentName } = props;
  const newNameHandler = useInputForm();
  const pwdHandler = useInputForm();
  return (
    <div className="px-5">
      <div className="text-lg text-text font-semibold">
        {currentName}さんのユーザ名変更
      </div>
      <div className="my-3">
        <Divider />
      </div>

      <div className="h-3" />
      <TextField
        fullWidth
        type="text"
        label="新しいユーザ名"
        variant="outlined"
        onChange={newNameHandler.onChange}
        value={newNameHandler.value}
      />
      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="password"
        label="パスワードを入力"
        variant="outlined"
        onChange={pwdHandler.onChange}
        value={pwdHandler.value}
      />
      <div className="h-5" />
      <Button variant="contained">ユーザ名を更新</Button>
    </div>
  );
};

export default UserNameUpdate;
