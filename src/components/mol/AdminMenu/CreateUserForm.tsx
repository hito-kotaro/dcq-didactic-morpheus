import React, { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import SelectForm from '../SelectForm/SelectForm';
import useSelectForm from '../SelectForm/useSelectForm';
import useUserApi from '../../../hooks/Api/useUserApi';
import useTeamStore from '../../../stores/TeamStore/useTeamStore';
import useRoleStore from '../../../stores/RoleStore/useRoleStore';

const CreateUserForm = () => {
  const { createUser } = useUserApi();
  const { roles } = useRoleStore();
  const { teams } = useTeamStore();
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
        <Button
          variant="contained"
          onClick={() =>
            createUser(
              userHandler.value,
              pwdHandler.value,
              Number(roleSelectHandler.value),
              Number(teamSelectHandler.value),
            )
          }
        >
          新しいユーザーを作成
        </Button>
      </div>
    </div>
  );
};

export default CreateUserForm;
