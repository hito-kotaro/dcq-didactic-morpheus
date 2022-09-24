import { Button } from '@mui/material';
import React, { VFC } from 'react';
import { roles } from '../../../testData/RoleData';
import { teams } from '../../../testData/TeamData';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import SelectForm from '../../mol/SelectForm/SelectForm';
import { selectItemType } from '../../mol/SelectForm/selectItemType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

type Props = {
  user: userDataType;
};
const UserAtrbuteUpdate: VFC<Props> = (props) => {
  const { user } = props;
  const teamSelectHandler = useSelectForm();
  const roleSelectHandler = useSelectForm();
  const teamMenu: selectItemType[] = teams.map((t: teamDataType) => ({
    id: t.id,
    label: t.name,
  }));
  return (
    <div className="px-3">
      <div className="h-3" />
      <div className="text-text">
        <span className="font-semibold text-lg">現在のロール: </span>
        {user.role}
      </div>
      <SelectForm
        menu={roles}
        label="ロールを選択してください"
        handler={roleSelectHandler}
      />
      <div className="h-3" />
      <div className="text-text">
        <span className="font-semibold text-lg">現在のチーム: </span>
        {user.team}
      </div>
      <SelectForm
        menu={teamMenu}
        label="チームを選択してください"
        handler={teamSelectHandler}
      />
      <div className="h-3" />
      <Button variant="contained">更新</Button>
    </div>
  );
};

export default UserAtrbuteUpdate;
