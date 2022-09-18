import React, { VFC } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
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
      <MyAvatar name={name} team={team} />
      <div className="ml-auto">
        <ScoreIcon
          icon={<LightbulbIcon sx={{ fontSize: 40, color: '#5CD63D' }} />}
          score={score}
        />
      </div>
    </div>
  );
};

export default UserListItem;
