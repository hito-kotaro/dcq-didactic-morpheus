import React, { VFC } from 'react';
import { closedRequestDataType } from '../../../types/data/requestDataType';
import RequestHistoryListItem from './RequestHistoryListItem';

type Props = {
  requests: closedRequestDataType[];
  onClick: (r: closedRequestDataType) => void;
};

const RequestHistoryList: VFC<Props> = (props) => {
  const { requests, onClick } = props;
  return (
    <>
      {requests.map((r: closedRequestDataType) => (
        <RequestHistoryListItem request={r} onClick={onClick} />
      ))}
    </>
  );
};

export default RequestHistoryList;
