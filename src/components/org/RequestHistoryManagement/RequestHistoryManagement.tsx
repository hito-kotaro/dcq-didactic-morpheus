import React, { useEffect } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { closedRequests } from '../../../testData/RequestData';
import { closedRequestDataType } from '../../../types/data/requestDataType';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import SplitTemplate from '../../templates/SplitTemplate';
import RequestHistoryDetail from './RequestHistoryDetail';
import RequestHistoryList from './RequestHistoryList';
import RequestHistoryListTool from './RequestHistoryListTool';
import RequestHistoryMenuHeader from './RequestHistoryMenuHeader';
import RequestHistoryPanelHeader from './RequestHistoryPanelHeader';
import useRequestHistoryManagement from './useRequestHistoryManagement';

const RequestHistoryManagement = () => {
  const {
    request,
    isDetail,
    filterdRequests,
    filteringRequestHistory,
    onClickListItem,
    requestSearchHandler,
    userSelectHandler,
    statusSelectHandler,
  } = useRequestHistoryManagement();
  const mainComponents = useChangeComponent();

  const wrapOnClickListItem = (r: closedRequestDataType) => {
    onClickListItem(r);
    mainComponents.chComponent(<RequestHistoryDetail cr={r} />);
  };
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
      menuContents={
        <RequestHistoryList
          requests={filterdRequests}
          onClick={wrapOnClickListItem}
        />
      }
      mainHeader={
        <RequestHistoryPanelHeader isDetail={isDetail} cr={request} />
      }
      mainContents={
        mainComponents.component ?? (
          <EmptyStateIcon msg="リクエストを選択してください" />
        )
      }
    />
  );
};

export default RequestHistoryManagement;
