import React, { VFC } from 'react';
import { Button, Divider } from '@mui/material';

import { requestDataType } from '../../../types/data/requestDataType';
import MyBadge from '../../atoms/MyBadge/MyBadge';
import BoringAvatar from '../../atoms/MyAvatar/BoringAvatar';

type Props = {
  request: requestDataType;
  onClick: (r: requestDataType) => void;
};
const RequestListItem: VFC<Props> = (props) => {
  const { request, onClick } = props;
  return (
    <>
      <Button fullWidth onClick={() => onClick(request)}>
        <div className="w-full flex text-text p-3">
          <BoringAvatar name={request.applicant} />
          <div className="ml-3 w-full">
            <div className="flex">
              <div className="text-text text-lg font-semibold text-left">
                {request.title}
              </div>
            </div>
            <div className="flex">
              <MyBadge
                bg={`bg-${request.status}`}
                text={`text-${request.status}`}
                content={`${String(request.status)}`}
              />
            </div>
            <div className="h-1" />
            <div className="flex">
              <MyBadge
                content={`申請者: ${request.applicant}`}
                bg="bg-other"
                text="text-other"
              />
              <div className="w-3" />
              <MyBadge
                content={` 申請日: ${request.created_at.substring(
                  0,
                  10,
                )} ${request.created_at.substring(11, 16)}`}
                bg="bg-other"
                text="text-other"
              />
              <div className="w-3" />
            </div>
            <div className="my-3">
              <Divider />
            </div>
            <div className="text-left">
              <p>{request.description}</p>
            </div>
          </div>
        </div>
      </Button>
      <Divider />
    </>
  );
};

export default RequestListItem;
