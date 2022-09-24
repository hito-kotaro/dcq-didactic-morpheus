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

const RequestManagement = () => {
  const {
    request,
    isDetail,
    userSelectItems,
    filterdRequests,
    requestSearchHandler,
    toolStatusSelectHandler,
    toolApplicantSelectHandler,
    filteringRequest,
    onClickRequestItem,
    setIsDetail,
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
      menuHeader={<UserInfo name="KOTARO" team="teamA" score={10} />}
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
          <div className="text-text text-lg font-semibold text-center border-b-1">
            リクエストを選択してください
          </div>
        )
      }
    />
  );
};

export default RequestManagement;
