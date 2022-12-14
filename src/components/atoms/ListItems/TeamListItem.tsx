import React, { VFC } from 'react';
import { Button } from '@mui/material';
import Groups3Icon from '@mui/icons-material/Groups3';
import Avatar from 'boring-avatars';
import ScoreIcon from '../ScoreIcon/ScoreIcon';
import DcpIcon from '../Icons/DcpIcon';
import PenaltyIcon from '../Icons/PenaltyIcon';
import { teamDataType } from '../../../types/data/teamDataType';

type Props = {
  team: teamDataType;
  onClick: (team: teamDataType) => void;
};
const TeamListItem: VFC<Props> = (props) => {
  const { team, onClick } = props;

  return (
    <Button fullWidth onClick={() => onClick(team)}>
      <div className="flex ml-3 w-full pt-2 mx-5">
        <div className="w-1/5">
          {/* <div className="h-10 w-10 bg-orange-300 rounded-md" /> */}
          <Avatar
            size={40}
            name={team.name}
            variant="marble"
            colors={['#FFBD87', '#FFD791', '#F7E8A6', '#D9E8AE', '#BFE3C0']}
          />
        </div>
        <div className="w-full">
          <div className="text-text text-lg text-left">
            <div className="flex">
              {team.name}
              <div className="w-5" />
              <ScoreIcon
                icon={<Groups3Icon sx={{ fontSize: 28, color: '#6F7073' }} />}
                score={team.member}
              />

              {/* <div className="w-10"/> */}
              <div className="flex ml-auto">
                <ScoreIcon icon={<DcpIcon size="sm" />} score={team.point} />
                <div className="w-5" />
                <ScoreIcon
                  icon={<PenaltyIcon size="sm" />}
                  score={team.penalty}
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
