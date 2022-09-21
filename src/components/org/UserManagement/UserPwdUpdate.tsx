import { TextField, Divider, Button } from '@mui/material';
import React, { VFC } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';

type Props = {
  name: string;
};
const UserPwdUpdate: VFC<Props> = (props) => {
  const { name } = props;
  const pwdHandler = useInputForm();
  const newPwdHandler = useInputForm();
  const reNewPwdHandler = useInputForm();
  return (
    <div className="px-5">
      <div className="text-lg font-semibold">{name}のユーザ名変更</div>
      <div className="h-3" />
      <TextField
        fullWidth
        type="password"
        label="現在のパスワード"
        variant="outlined"
        onChange={pwdHandler.onChange}
        value={pwdHandler.value}
      />
      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="password"
        label="新しいパスワードを入力"
        variant="outlined"
        onChange={newPwdHandler.onChange}
        value={newPwdHandler.value}
      />

      <div className="h-5" />

      <TextField
        fullWidth
        type="password"
        label="新しいパスワードを入力"
        variant="outlined"
        onChange={reNewPwdHandler.onChange}
        value={reNewPwdHandler.value}
      />

      <div className="h-5" />

      <Button variant="contained">ユーザ名を更新</Button>
    </div>
  );
};

export default UserPwdUpdate;
