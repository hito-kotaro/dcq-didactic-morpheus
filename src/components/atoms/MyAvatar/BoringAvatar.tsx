import React, { VFC } from 'react';
import Avatar from 'boring-avatars';

type Props = { name: string; isTeam?: boolean };

const BoringAvatar: VFC<Props> = (props) => {
  const { name, isTeam } = props;
  return (
    <Avatar
      size={40}
      name={name}
      variant={isTeam === true ? 'marble' : 'beam'}
      colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
    />
  );
};

export default BoringAvatar;
