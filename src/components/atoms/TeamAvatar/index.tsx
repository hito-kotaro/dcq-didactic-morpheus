import Avatar from 'boring-avatars';
import React, { VFC } from 'react';

type Props = { name: string; size?: number };
const index: VFC<Props> = (props) => {
  const { name, size } = props;
  return (
    <Avatar
      size={size ?? 40}
      name={name}
      variant="marble"
      colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
    />
  );
};

export default index;
