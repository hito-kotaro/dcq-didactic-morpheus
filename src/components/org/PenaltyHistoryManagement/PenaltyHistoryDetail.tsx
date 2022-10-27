import React, { VFC } from 'react';
import { issueDataType } from '../../../types/data/penaltyDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';

type Props = {
  issue: issueDataType;
};

const PenaltyHistoryDetail: VFC<Props> = (props) => {
  const { issue } = props;

  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {issue.title}
      </div>

      <div className="px-3">
        <div className="h-3" />
        <OwnerHeader
          owner={issue.team}
          date={`${issue.penalty_updated_at.substring(
            0,
            10,
          )} ${issue.penalty_updated_at.substring(11, 16)}`}
          reward={issue.point}
          status="penalty"
          isPenalty
          isTeam
        />

        <div className="h-8" />

        <div className="text-text">
          <div className="text-lg font-semibold border-b-1">{issue.title}</div>
          <div className="mt-3">
            <p>{issue.penalty_description}</p>
          </div>

          <div className="h-8" />

          <div className="text-lg font-semibold border-b-1">
            ペナルティ付与情報
          </div>
          <div className="h-8" />
          <OwnerHeader
            owner={issue.authorizer}
            date={`${issue.created_at.substring(
              0,
              10,
            )} ${issue.created_at.substring(11, 16)}`}
            reward={0}
            status="assigned"
            isPenalty
          />
          <div className="mt-3">
            <div className="text-lg font-semibold border-b-1">コメント</div>
            <p>
              {issue.description === ''
                ? 'コメントはありません'
                : issue.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenaltyHistoryDetail;
