import { TextField, Button } from '@mui/material';
import React, { VFC } from 'react';
import SelectForm from '../../mol/SelectForm/SelectForm';
import { roles } from '../../../testData/RoleData';
import { teams } from '../../../testData/TeamData';
import { selectMenuType } from '../../mol/SelectForm/selectItemType';
import { teamDataType } from '../../../types/data/teamDataType';
import { userCreateHandlerType } from './types/userCreateHandler';

type Props = {
  userCreateHandler: userCreateHandlerType;
};

const UserCreate: VFC<Props> = (props) => {
  const { userCreateHandler } = props;
  const {
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
  } = userCreateHandler;
  const teamMenu: selectMenuType[] = teams.map((t: teamDataType) => ({
    id: t.id,
    label: t.name,
  }));

  return (
    <div>
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
        menu={roles}
        label="ロールを選択してください"
        handler={roleSelectHandler}
      />

      <div className="h-3" />
      <SelectForm
        menu={teamMenu}
        label="チームを選択してください"
        handler={teamSelectHandler}
      />

      <div className="h-3" />
      <Button variant="contained">新しいユーザを作成</Button>
    </div>
  );
};

export default UserCreate;
