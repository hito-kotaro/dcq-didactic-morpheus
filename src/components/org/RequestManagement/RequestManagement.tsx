import React, { useEffect } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { requestDataType } from '../../../types/data/requestDataType';
import SplitTemplate from '../../templates/SplitTemplate';
import RequestList from '../RequestList/RequestList';
import useRequestmanagement from './useRequestmanagement';
import RequestDetail from './RequestDetail';
import RequestPanelHeader from './RequestPanelHeader';
import RequestListTool from '../../mol/RequestListTool/RequestListTool';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import SearchWindow from '../../mol/SearchWindow/SearchWindow';
import useRequestStore from '../../../stores/RequestStore/useRequestStore';
import useRequestApi from '../../../hooks/Api/useRequestApi';

const RequestManagement = () => {
  const {
    filterdRequests,
    requestSearchHandler,
    filteringRequest,
    applicantSelectHandler,
    onClickRequestItem,
  } = useRequestmanagement();
  const mainContents = useChangeComponent();
  const { requests } = useRequestStore();
  const { fetchTenantRequests } = useRequestApi();
  const wrapOnClickRequestItem = (r: requestDataType) => {
    onClickRequestItem(r);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  useEffect(() => {
    fetchTenantRequests();
  }, []);

  // フィルター前のリクエスト一覧/検索条件が変わった時
  // 一つ前のステートが出てしまう
  useEffect(() => {
    filteringRequest(requests);
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
