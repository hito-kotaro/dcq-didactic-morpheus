import React, { VFC } from 'react';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import MyAvatar from '../../atoms/MyAvatar/MyAvatar';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';
import { userDataType } from '../../../types/data/userDataType';
import UserDetail from '../../org/UserManagement/UserDetail';

type Props = {
  user: userDataType;
  onClick: (u: userDataType) => void;
};

const UserListItem: VFC<Props> = (props) => {
  const { user, onClick } = props;
  return (
    <div className="flex px-3">
      <Button fullWidth onClick={() => onClick(user)}>
        <MyAvatar name={user.name} team={user.team} />
        <div className="ml-auto">
          <ScoreIcon
            icon={<SpeedIcon sx={{ fontSize: 26, color: '#5CD63D' }} />}
            score={user.point}
          />
        </div>
      </Button>
    </div>
  );
};

export default UserListItem;
