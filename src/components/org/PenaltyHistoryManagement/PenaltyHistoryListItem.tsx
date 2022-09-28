import React, { VFC } from 'react';
import { Button, Divider } from '@mui/material';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
import MyBadge from '../../atoms/MyBadge/MyBadge';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';

type Props = {
  penalty: assignedPenaltyDateType;
  onClick: (p: assignedPenaltyDateType) => void;
};
const PenaltyHistoryListItem: VFC<Props> = (props) => {
  const { penalty, onClick } = props;
  return (
    <>
      <Button fullWidth onClick={() => onClick(penalty)}>
        <div className="w-full flex text-text p-3">
          <BoringAvatar name={penalty.team} isTeam />
          <div className="ml-3 w-full">
            <div className="flex">
              <div className="text-text text-lg font-semibold text-left">
                {penalty.title}
              </div>
            </div>
            <div className="h-1" />
            <div className="flex">
              <MyBadge
                content={`付与されたチーム: ${penalty.team}`}
                bg="bg-rejected"
                text="text-rejected"
              />
              <div className="w-3" />
              <MyBadge
                content={` 付与日: ${penalty.date}`}
                bg="bg-rejected"
                text="text-rejected"
              />
              <div className="w-3" />
            </div>
            <div className="my-3">
              <Divider />
            </div>
            <div className="text-left">
              <p>{penalty.comment}</p>
            </div>
          </div>
        </div>
      </Button>
      <Divider />
    </>
  );
};

export default PenaltyHistoryListItem;
