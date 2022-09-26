import React, { VFC } from 'react';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';

type Props = {
  penalty: assignedPenaltyDateType;
};

const PenaltyHistoryDetail: VFC<Props> = (props) => {
  const { penalty } = props;

  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {penalty.title}
      </div>

      <div className="px-3">
        <div className="h-3" />
        <OwnerHeader
          owner={penalty.team}
          date={penalty.date}
          reward={penalty.penalty}
          status="penalty"
          isPenalty
        />

        <div className="h-8" />

        <div className="text-text">
          <div className="text-lg font-semibold border-b-1">
            {penalty.title}
          </div>
          <div className="mt-3">
            <p>{penalty.p_desciription}</p>
          </div>

          <div className="h-8" />

          <div className="text-lg font-semibold border-b-1">
            ペナルティ付与情報
          </div>
          <div className="h-8" />
          <OwnerHeader
            owner={penalty.authorizer}
            date={penalty.date}
            reward={0}
            status="assigned"
            isPenalty
          />
          <div className="mt-3">
            <div className="text-lg font-semibold border-b-1">コメント</div>
            <p>
              {penalty.comment === ''
                ? 'コメントはありません'
                : penalty.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenaltyHistoryDetail;
