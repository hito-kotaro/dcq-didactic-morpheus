import React, { VFC } from 'react';
import { Divider } from '@mui/material';
import { closedRequestDataType } from '../../../types/data/requestDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';

type Props = {
  cr: closedRequestDataType;
};

const RequestHistoryDetail: VFC<Props> = (props) => {
  const { cr } = props;

  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {cr.title}
      </div>

      <div className="px-3">
        <div className="h-3" />
        <OwnerHeader
          owner={cr.applicant}
          date={cr.date}
          reward={cr.q_reward}
          status="open"
        />

        <div className="h-8" />

        <div className="text-text">
          <div className="text-lg font-semibold border-b-1">クエスト内容</div>
          <div className="mt-3">
            <p>{cr.q_description}</p>
          </div>

          <div className="h-8" />

          <div className="text-lg font-semibold border-b-1">リクエスト内容</div>
          <div className="mt-3">
            <p>{cr.description}</p>
          </div>

          <div className="h-8" />

          <div className="text-lg font-semibold border-b-1">承認情報</div>
          <div className="h-8" />
          <OwnerHeader
            owner={cr.authorizer}
            date={cr.date}
            reward={0}
            status={cr.status}
          />
          <div className="mt-3">
            <p>{cr.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHistoryDetail;
