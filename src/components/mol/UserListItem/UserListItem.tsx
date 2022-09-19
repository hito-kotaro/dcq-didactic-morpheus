import React, { VFC } from 'react';
import { Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import MyAvatar from '../../atoms/MyAvatar/MyAvatar';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';

type Props = {
  name: string;
  team: string;
  score: number;
};

const UserListItem: VFC<Props> = (props) => {
  const { name, team, score } = props;
  return (
    <div className="flex px-3">
      <Button fullWidth>
        <MyAvatar name={name} team={team} />
        <div className="ml-auto">
          <ScoreIcon
            icon={<SpeedIcon sx={{ fontSize: 26, color: '#5CD63D' }} />}
            score={score}
          />
        </div>
      </Button>
    </div>
  );
};

export default UserListItem;
