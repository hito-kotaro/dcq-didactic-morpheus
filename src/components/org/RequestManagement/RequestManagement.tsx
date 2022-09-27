import React, { useEffect } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { requestDataType } from '../../../types/data/requestDataType';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import SplitTemplate from '../../templates/SplitTemplate';
import RequestList from '../RequestList/RequestList';
import useRequestmanagement from './useRequestmanagement';
import { requests } from '../../../testData/RequestData';
import RequestDetail from './RequestDetail';
import RequestPanelHeader from './RequestPanelHeader';
import RequestListTool from '../../mol/RequestListTool/RequestListTool';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import SearchWindow from '../../mol/SearchWindow/SearchWindow';

const RequestManagement = () => {
  const {
    filterdRequests,
    requestSearchHandler,
    filteringRequest,
    onClickRequestItem,
  } = useRequestmanagement();
  const mainContents = useChangeComponent();

  const wrapOnClickRequestItem = (r: requestDataType) => {
    onClickRequestItem(r);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  useEffect(() => {
    filteringRequest(requests);
  }, [requestSearchHandler.value]);
  return (
    <SplitTemplate
      menuHeader={
        <SearchWindow
          handler={requestSearchHandler}
          placeholder="リクエストタイトルで検索"
        />
      }
      menuTool={<RequestListTool inputHandler={requestSearchHandler} />}
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
