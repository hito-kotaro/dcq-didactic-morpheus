import React, { ReactElement, VFC } from 'react';

type Props = {
  icon: ReactElement;
  score: number;
};

const ScoreIcon: VFC<Props> = (props) => {
  const { icon, score } = props;
  return (
    <div>
      {icon}
      <div className=" font-semibold text-text text-lg text-center">
        {score}
      </div>
    </div>
  );
};

export default ScoreIcon;
