import { Avatar } from '@mui/material';
import React, { VFC } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import { userDataType } from '../../../types/data/userDataType';
import MyBadge from '../../atoms/MyBadge/MyBadge';

type Props = {
  owner: userDataType;
  quest: questDataType;
};
const OwnerHeader: VFC<Props> = (props) => {
  const { owner, quest } = props;
  return (
    <div className="flex w-full">
      <Avatar />
      <div className="w-5" />
      <div className="text-text w-full">
        <div className="text-lg font-semibold">{owner.name}</div>
        <div className="flex w-full">
          <div className="text-sm">{quest.date}</div>
          <div className="ml-auto">
            <MyBadge color="bg-success" content={String(quest.reward)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerHeader;
