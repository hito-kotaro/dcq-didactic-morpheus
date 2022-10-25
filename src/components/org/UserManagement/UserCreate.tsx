import React, { useEffect } from 'react';
import { TextField, Button, Divider } from '@mui/material';
import SelectForm from '../../mol/SelectForm/SelectForm';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import useGlobalState from '../../../stores/useGlobalState';

const UserCreate = () => {
  const { roles, teams } = useGlobalState();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  useEffect(() => {
    roleSelectHandler.formatSelectItem(roles);
  }, [roles]);

  useEffect(() => {
    teamSelectHandler.formatSelectItem(teams);
  }, [teams]);

  return (
    <div className="px-3">
      <div className="text-text text-lg font-semibold">ユーザ新規作成</div>

      <div className="my-3">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
        label="ユーザ名"
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
      <SelectForm
        menu={roleSelectHandler.selectItem}
        label="ロールを選択してください"
        handler={roleSelectHandler}
      />

      <div className="h-3" />
      <SelectForm
        menu={teamSelectHandler.selectItem}
        label="チームを選択してください"
        handler={teamSelectHandler}
      />

      <div className="h-3" />
      <Button variant="contained">新しいユーザを作成</Button>
    </div>
  );
};

export default UserCreate;
