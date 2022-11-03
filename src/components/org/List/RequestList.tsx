import React, { VFC } from 'react';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestListItem from '../../atoms/ListItems/RequestListItem';

type Props = {
  requests: requestDataType[];
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
