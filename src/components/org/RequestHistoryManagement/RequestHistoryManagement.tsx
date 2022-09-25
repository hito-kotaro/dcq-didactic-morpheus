import React, { useEffect } from 'react';
import { closedRequests } from '../../../testData/RequestData';
import SplitTemplate from '../../templates/SplitTemplate';
import RequestList from '../RequestList/RequestList';
import RequestHistoryListTool from './RequestHistoryListTool';
import RequestHistoryMenuHeader from './RequestHistoryMenuHeader';
import useRequestHistoryManagement from './useRequestHistoryManagement';

const RequestHistoryManagement = () => {
  const {
    filterdRequests,
    filteringRequestHistory,
    requestSearchHandler,
    userSelectHandler,
    statusSelectHandler,
  } = useRequestHistoryManagement();
  const dummy = () => {};

  useEffect(() => {
    filteringRequestHistory(closedRequests);
  }, [
    requestSearchHandler.value,
    statusSelectHandler.value,
    userSelectHandler.value,
  ]);

  return (
    <SplitTemplate
      menuHeader={
        <RequestHistoryMenuHeader requestSearchHandler={requestSearchHandler} />
      }
      menuTool={
        <RequestHistoryListTool
          userSelectHandler={userSelectHandler}
          statusSelectHandler={statusSelectHandler}
        />
      }
      menuContents={<RequestList requests={filterdRequests} onClick={dummy} />}
      mainHeader={<div>main header</div>}
      mainContents={<div>main contents</div>}
    />
  );
};

export default RequestHistoryManagement;
