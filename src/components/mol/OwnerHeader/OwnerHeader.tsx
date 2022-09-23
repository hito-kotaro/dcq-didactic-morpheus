import { Avatar } from '@mui/material';
import React, { VFC } from 'react';
import MyBadgeList from '../MyBadgeList/MyBadgeList';
import { badgeType } from '../MyBadgeList/myBadgeType';

type Props = {
  owner: string;
  date: string;
  reward: number;
  status: string;
};
const OwnerHeader: VFC<Props> = (props) => {
  const { owner, date, reward, status } = props;
  const badges: badgeType[] = [
    { bg: `bg-${status}`, text: `text-${status}`, content: status },
    { bg: `bg-other`, text: `text-other`, content: String(reward) },
  ];
  return (
    <div className="flex w-full">
      <Avatar />
      <div className="w-5" />
      <div className="text-text w-full">
        <div className="text-lg font-semibold">{owner}</div>
        <div className="flex w-full">
          <div className="text-sm">{date}</div>
          <div className="ml-auto">
            <MyBadgeList badgeList={badges} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerHeader;
