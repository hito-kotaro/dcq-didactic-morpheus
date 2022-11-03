import React, { useEffect } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { requestDataType } from '../../../types/data/requestDataType';
import SplitTemplate from '../../templates/SplitTemplate';
import RequestList from '../List/RequestList';
import useRequestmanagement from './useRequestmanagement';
import RequestDetail from '../../mol/Details/RequestDetail';
import RequestPanelHeader from '../../mol/PanelHeaders/RequestPanelHeader';
import RequestListTool from '../../mol/ListTools/RequestListTool';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import SearchWindow from '../../mol/SearchWindow/SearchWindow';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useGlobalState from '../../../stores/useGlobalState';

const RequestManagement = () => {
  const {
    filterdRequests,
    requestSearchHandler,
    filteringRequest,
    applicantSelectHandler,
    onClickRequestItem,
  } = useRequestmanagement();
  const mainContents = useChangeComponent();
  const { requests } = useGlobalState();
  const { fetchTenantRequests } = useRequestApi();

  const wrapOnClickRequestItem = (r: requestDataType) => {
    onClickRequestItem(r);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  useEffect(() => {
    fetchTenantRequests();
  }, []);

  useEffect(() => {
    filteringRequest(
      requests.filter((r: requestDataType) => r.status === 'open'),
    );
    mainContents.chComponent(
      <EmptyStateIcon msg="リクエストを選択してください" />,
    );
  }, [requests, requestSearchHandler.value, applicantSelectHandler.value]);

  return (
    <SplitTemplate
      menuHeader={
        <SearchWindow
          handler={requestSearchHandler}
          placeholder="リクエストタイトルで検索"
        />
      }
      menuTool={<RequestListTool handler={applicantSelectHandler} />}
      menuContents={
        <RequestList
          requests={filterdRequests}
          onClick={wrapOnClickRequestItem}
        />
      }
      mainHeader={<RequestPanelHeader />}
      mainContents={
        mainContents.component ?? (
          <EmptyStateIcon msg="リクエストを選択してください" />
        )
      }
    />
  );
};

export default RequestManagement;
