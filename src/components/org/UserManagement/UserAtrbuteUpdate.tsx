import { Button, Divider } from '@mui/material';
import React, { useEffect, VFC } from 'react';
import useRoleStore from '../../../stores/RoleStore/useRoleStore';
import useTeamStore from '../../../stores/TeamStore/useTeamStore';
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
  const { roles } = useRoleStore();
  const { teams } = useTeamStore();

  const teamSelectHandler = useSelectForm();
  const roleSelectHandler = useSelectForm();

  useEffect(() => {
    roleSelectHandler.formatSelectItem(roles);
  }, [roles]);

  useEffect(() => {
    teamSelectHandler.formatSelectItem(teams);
  }, [teams]);

  return (
    <div className="px-3">
      <div className="text-lg text-text font-semibold">
        {user.name}さんのユーザ属性変更
      </div>
      <div className="my-3">
        <Divider />
      </div>
      <div className="h-3" />
      <div className="text-text">
        <span className="font-semibold text-lg">現在のロール: </span>
        {user.role}
      </div>
      <div className="my-3">
        <Divider />
      </div>
      <SelectForm
        menu={roleSelectHandler.selectItem}
        label="ロールを選択してください"
        handler={roleSelectHandler}
      />
      <div className="h-3" />
      <div className="text-text">
        <span className="font-semibold text-lg">現在のチーム: </span>
        {user.team}
      </div>
      <div className="my-3">
        <Divider />
      </div>
      <SelectForm
        menu={teamSelectHandler.selectItem}
        label="チームを選択してください"
        handler={teamSelectHandler}
      />
      <div className="h-3" />
      <Button variant="contained">更新</Button>
    </div>
  );
};

export default UserAtrbuteUpdate;
