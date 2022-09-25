import React, { VFC } from 'react';
import {
  closedRequestDataType,
  requestDataType,
} from '../../../types/data/requestDataType';
import RequestListItem from '../../mol/RequestListItem/RequestListItem';

type Props = {
  requests: requestDataType[] | closedRequestDataType[];
  onClick: (q: requestDataType) => void;
};

const RequestList: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  return (
    <>
      {requests.map((r: requestDataType) => (
        <RequestListItem request={r} onClick={onClick} />
      ))}
    </>
  );
};

export default RequestList;
