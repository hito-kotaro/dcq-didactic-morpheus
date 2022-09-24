import React, { VFC } from 'react';
import MyAvatar from '../../atoms/MyAvatar/MyAvatar';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';
import DcpIcon from '../../atoms/DcpIcon/DcpIcon';

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
        <ScoreIcon icon={<DcpIcon size="sm" />} score={score} />
      </div>
    </div>
  );
};

export default UserInfo;
