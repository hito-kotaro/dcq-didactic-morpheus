import React, { VFC } from 'react';
import { requestDataType } from '../../../types/data/requestDataType';
import OwnerHeader from '../PanelHeaders/OwnerHeader';

type Props = {
  request: requestDataType;
};

const RequestHistoryDetail: VFC<Props> = (props) => {
  const { request } = props;

  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {request.title}
      </div>

      <div className="px-3">
        <div className="h-3" />
        <OwnerHeader
          owner={request.applicant}
          date={`${request.created_at.substring(
            0,
            10,
          )} ${request.created_at.substring(11, 16)}`}
          reward={request.reward}
          status={request.status}
        />

        <div className="h-8" />

        <div className="text-text">
          <div className="text-lg font-semibold border-b-1">クエスト内容</div>
          <div className="mt-3">
            <p>{request.quest_description}</p>
          </div>

          <div className="h-8" />

          <div className="text-lg font-semibold border-b-1">リクエスト内容</div>
          <div className="mt-3">
            <p>{request.description}</p>
          </div>

          <div className="h-8" />

          <div className="text-lg font-semibold border-b-1">承認情報</div>
          <div className="h-8" />
          <OwnerHeader
            owner={request.authorizer!}
            date={`${request.updated_at.substring(
              0,
              10,
            )} ${request.updated_at.substring(11, 16)}`}
            reward={request.reward}
            status={request.status}
          />
          <div className="mt-3">
            <p>{request.auth_comment!}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHistoryDetail;
