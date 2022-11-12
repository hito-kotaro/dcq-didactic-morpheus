import React, { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import SelectForm from '../SelectForm/SelectForm';
import useSelectForm from '../SelectForm/useSelectForm';
import useUserApi from '../../../hooks/Api/useUserApi';
import useGlobalState from '../../../stores/useGlobalState';
import AdminMenuTemplate from '../../templates/AdminMenuTemplate';

const CreateUserForm = () => {
  const { createUser } = useUserApi();
  const { roles } = useGlobalState();
  const { teams } = useGlobalState();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  // useEffectでロールを取得してselectItemTypeに入れる
  useEffect(() => {
    roleSelectHandler.formatSelectItem(roles);
  }, [roles]);

  // useEffectでグループを取得してselectItemTypeに入れる
  useEffect(() => {
    teamSelectHandler.formatSelectItem(teams);
  }, [teams]);

  const onClickCreate = () => {
    createUser(
      userHandler.value,
      pwdHandler.value,
      Number(roleSelectHandler.value),
      Number(teamSelectHandler.value),
    );
    userHandler.clear();
    pwdHandler.clear();
    rePwdHandler.clear();
    roleSelectHandler.setValue('');
    teamSelectHandler.setValue('');
  };
  return (
    <AdminMenuTemplate title="新しいユーザを作成">
      <>
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
        <Button variant="contained" onClick={onClickCreate}>
          新しいユーザーを作成
        </Button>
      </>
    </AdminMenuTemplate>
  );
};

export default CreateUserForm;
