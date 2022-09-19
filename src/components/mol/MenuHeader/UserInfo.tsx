import React, { VFC } from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import MyAvatar from '../../atoms/MyAvatar/MyAvatar';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';

type Props = {
  name: string;
  team: string;
  score: number;
};

const UserInfo: VFC<Props> = (props) => {
  const { name, team, score } = props;
  return (
    <div className="flex px-5 pt-3">
      <MyAvatar name={name} team={team} />
      <div className="ml-auto">
        <ScoreIcon
          icon={<SpeedIcon sx={{ fontSize: 26, color: '#5CD63D' }} />}
          score={score}
        />
      </div>
    </div>
  );
};

export default UserInfo;
