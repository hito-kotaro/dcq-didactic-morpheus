import { Avatar } from '@mui/material';
import React, { VFC } from 'react';

type Props = {
  name: string;
  team: string;
};
const MyAvatar: VFC<Props> = (props) => {
  const { name, team } = props;
  return (
    <div className="flex">
      <Avatar />
      <div className="leading-10 text-xl ml-3 text-text">{`${name} @ ${team}`}</div>
    </div>
  );
};

export default MyAvatar;
