import React from 'react';
import RewardListItem from '../../atoms/ListItems/RewardListItem';
import { rewards } from '../../../testData/RewardData';
import { RewardType } from '../../../types/data/RewardType';

const RewardList = () => {
  return (
    <div className=" h-full">
      <div className="text-text text-lg font-semibold">
        現在のどりかむリスト
      </div>
      <div className="px-2 border-1 rounded-md h-full overflow-y-scroll">
        {rewards.map((r: RewardType) => (
          <>
            <div className="h-3" />
            <RewardListItem rewardData={r} />
          </>
        ))}
      </div>
    </div>
  );
};

export default RewardList;
