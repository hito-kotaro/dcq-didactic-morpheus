import React, { VFC } from 'react';
import DcpIcon from '../../atoms/DcpIcon/DcpIcon';
import PenaltyIcon from '../../atoms/Icons/PenaltyIcon';
import ScoreIcon from '../../atoms/ScoreIcon/ScoreIcon';
import MyBadgeList from '../MyBadgeList/MyBadgeList';
import { badgeType } from '../MyBadgeList/myBadgeType';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';

type Props = {
  owner: string;
  date: string;
  reward: number;
  status: string;
  isPenalty?: boolean;
  isTeam?: boolean;
};
const OwnerHeader: VFC<Props> = (props) => {
  const { owner, date, reward, status, isPenalty, isTeam } = props;
  const badges: badgeType[] = [
    { bg: `bg-${status}`, text: `text-${status}`, content: status },
  ];

  return (
    <div className="flex w-full">
      <BoringAvatar name={owner} isTeam={isTeam} />
      <div className="w-5" />
      <div className="text-text w-full">
        <div className="flex">
          <div className="text-lg font-semibold">{owner}</div>
        </div>

        <div className="flex w-full ">
          <div className="text-sm">{date}</div>
          <div className="w-3" />
          <MyBadgeList badgeList={badges} />

          <div className="ml-auto mr-7">
            <ScoreIcon
              icon={
                isPenalty ? <PenaltyIcon size="sm" /> : <DcpIcon size="sm" />
              }
              score={reward}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerHeader;
