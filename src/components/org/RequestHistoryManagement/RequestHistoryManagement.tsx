import React, { useEffect } from 'react';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import { requestDataType } from '../../../types/data/requestDataType';
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
  const { requests } = useGlobalState();
  const { fetchTenantRequests } = useRequestApi();
  const wrapOnClickListItem = (r: requestDataType) => {
    onClickListItem(r);
    mainComponents.chComponent(<RequestHistoryDetail request={r} />);
  };

  useEffect(() => {
    fetchTenantRequests();
  }, []);

  useEffect(() => {
    filteringRequestHistory(
      requests.filter((r: requestDataType) => {
        return r.status !== 'open';
      }),
    );
  }, [
    requests,
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
        <RequestHistoryPanelHeader isDetail={isDetail} request={request} />
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
