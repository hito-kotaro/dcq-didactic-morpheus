import React, { VFC } from 'react';

type Props = {
  color: string;
  content: string;
};
const MyBadge: VFC<Props> = (props) => {
  const { color, content } = props;

  return (
    <div
      className={` ${color} h-5 text-center leading-5 rounded-lg text-text px-5`}
    >
      {content}
    </div>
  );
};

export default MyBadge;
