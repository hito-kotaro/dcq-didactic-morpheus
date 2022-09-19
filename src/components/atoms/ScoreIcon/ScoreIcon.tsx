import Badge from '@mui/material/Badge/Badge';
import React, { ReactElement, VFC } from 'react';

type Props = {
  icon: ReactElement;
  score: number;
};

const ScoreIcon: VFC<Props> = (props) => {
  const { icon, score } = props;
  return (
    <div>
      <Badge
        color="primary"
        badgeContent={score}
        max={999}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {icon}
      </Badge>
    </div>
  );
};

export default ScoreIcon;
