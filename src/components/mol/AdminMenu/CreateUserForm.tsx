import React from 'react';
import { TextField, Button } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import SelectForm from '../SelectForm/SelectForm';
import { selectMenuType } from '../SelectForm/selectItemType';
import useSelectForm from '../SelectForm/useSelectForm';

const CreateUserForm = () => {
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  const roles: selectMenuType[] = [
    { id: 1, label: 'master' },
    { id: 2, label: 'leader' },
    { id: 3, label: 'member' },
  ];
  const groups: selectMenuType[] = [
    { id: 1, label: 'GroupA' },
    { id: 2, label: 'GroupB' },
    { id: 3, label: 'GroupC' },
  ];

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
          menu={roles}
          label="ロールを選択してください"
          handler={roleSelectHandler}
        />

        <div className="h-3" />
        <SelectForm
          menu={groups}
          label="グループを選択してください"
          handler={teamSelectHandler}
        />

        <div className="h-3" />
        <Button variant="contained">新しいユーザーを作成</Button>
      </div>
    </div>
  );
};

export default CreateUserForm;
