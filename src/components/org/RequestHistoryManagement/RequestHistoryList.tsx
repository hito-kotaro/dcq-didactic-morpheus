import React, { VFC } from 'react';
import {
  closedRequestDataType,
  requestDataType,
} from '../../../types/data/requestDataType';
import RequestHistoryListItem from './RequestHistoryListItem';

type Props = {
  requests: requestDataType[];
  onClick: (r: requestDataType) => void;
};

const RequestHistoryList: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  return (
    <>
      {requests.map((r: requestDataType) => (
        <RequestHistoryListItem request={r} onClick={onClick} />
      ))}
    </>
  );
};

export default RequestHistoryList;
