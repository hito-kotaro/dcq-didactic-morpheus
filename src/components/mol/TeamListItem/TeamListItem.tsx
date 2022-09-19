import React, { VFC } from 'react';
import { Button } from '@mui/material';
import Groups3Icon from '@mui/icons-material/Groups3';
import SpeedIcon from '@mui/icons-material/Speed';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';

type Props = {
  id: number;
  name: string;
  member: number;
  point: number;
  penalty: number;
  onClick: (id: number) => void;
};
const TeamListItem: VFC<Props> = (props) => {
  const { id, name, member, point, penalty, onClick } = props;

  return (
    <Button fullWidth onClick={() => onClick(id)}>
      <div className="flex ml-3 w-full pt-2 mx-5">
        <div className="w-1/5">
          <div className="h-10 w-10 bg-orange-300 rounded-md" />
        </div>
        <div className="w-full">
          <div className="text-text text-lg text-left">
            <div className="flex">
              {name}
              <div className="w-5" />
              <ScoreIcon
                icon={<Groups3Icon sx={{ fontSize: 28, color: '#6F7073' }} />}
                score={member}
              />

              {/* <div className="w-10"/> */}
              <div className="flex ml-auto">
                <ScoreIcon
                  icon={<SpeedIcon sx={{ fontSize: 28, color: '#6F7073' }} />}
                  score={point - penalty}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default TeamListItem;
