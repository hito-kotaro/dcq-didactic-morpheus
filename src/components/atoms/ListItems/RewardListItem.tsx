import React, { VFC } from 'react';
import { RewardType } from '../../../types/data/RewardType';
import DcpIcon from '../Icons/DcpIcon';
import ScoreIcon from '../ScoreIcon/ScoreIcon';

type Props = {
  rewardData: RewardType;
};
const RewardListItem: VFC<Props> = (props) => {
  const { rewardData } = props;
  return (
    <div className="flex border-b-1">
      <div className="w-10/12 text-text">
        <div className="text-lg font-semibold">{rewardData.title}</div>
        <div className="h-5" />
        <div className="">{rewardData.description}</div>
        <div className="h-3" />
      </div>
      <div className="w-2/12 ml-auto">
        <ScoreIcon icon={<DcpIcon />} score={rewardData.point} />
      </div>
    </div>
  );
};

export default RewardListItem;
