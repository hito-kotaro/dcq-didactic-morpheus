import { Avatar } from '@mui/material';
import React, { VFC } from 'react';
import DcpIcon from '../../atoms/DcpIcon/DcpIcon';
import PenaltyIcon from '../../atoms/Icons/PenaltyIcon';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';
import MyBadgeList from '../MyBadgeList/MyBadgeList';
import { badgeType } from '../MyBadgeList/myBadgeType';

type Props = {
  owner: string;
  date: string;
  reward: number;
  status: string;
  isPenalty?: boolean;
};
const OwnerHeader: VFC<Props> = (props) => {
  const { owner, date, reward, status, isPenalty } = props;
  const badges: badgeType[] = [
    { bg: `bg-${status}`, text: `text-${status}`, content: status },
  ];

  return (
    <div className="flex w-full">
      <Avatar />
      <div className="w-5" />
      <div className="text-text w-full">
        <div className="flex">
          <div className="text-lg font-semibold">{owner}</div>
        </div>

        <div className="flex w-full ">
          <div className="text-sm">{date}</div>
          <div className="ml-auto mr-7">
            <ScoreIcon
              icon={
                isPenalty ? <PenaltyIcon size="sm" /> : <DcpIcon size="sm" />
              }
              score={reward}
            />
          </div>
        </div>
        <div className="ml-auto">
          <MyBadgeList badgeList={badges} />
        </div>
      </div>
    </div>
  );
};

export default OwnerHeader;
