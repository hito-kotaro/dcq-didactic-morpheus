import React, { useEffect } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { requestDataType } from '../../../types/data/requestDataType';
import SplitTemplate from '../../templates/SplitTemplate';
import useRequestmanagement from './useRequestmanagement';
import RequestDetail from '../../mol/Details/RequestDetail';
import RequestPanelHeader from '../../mol/PanelHeaders/RequestPanelHeader';
import RequestListTool from '../../mol/ListTools/RequestListTool';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import SearchWindow from '../../mol/SearchWindow/SearchWindow';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useGlobalState from '../../../stores/useGlobalState';
import useList from '../List/useList';
import List from '../List';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../../lib/constants';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import ControlModal from '../../mol/ControlModal';
import useModal from '../../atoms/MyModal/useMyModal';

const RequestManagement = () => {
  const {
    filterdRequests,
    requestSearchHandler,
    filteringRequest,
    applicantSelectHandler,
    onClickRequestItem,
  } = useRequestmanagement();
  const { open, handleOpen, handleClose } = useModal();
  const mainContents = useChangeComponent();
  const { convRequest, pickItem } = useList();
  const { requests } = useGlobalState();
  const { fetchTenantRequests } = useRequestApi();
  const [width, height] = useWindowSize();

  const wrapOnClickRequestItem = (id: number) => {
    const r = pickItem(id, requests);
    if (width > MOBILE_WIDTH_MAX_LIMIT) {
      onClickRequestItem(r);
      mainContents.chComponent(<RequestDetail request={r} />);
    } else {
      handleOpen();
      onClickRequestItem(r);
      mainContents.chComponent(
        <RequestDetail request={r} handleClose={handleClose} />,
      );
    }
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
    <>
      <ControlModal
        open={open}
        handleClose={handleClose}
        content={mainContents.component ?? <div>no</div>}
      />
      <SplitTemplate
        menuHeader={
          <SearchWindow
            handler={requestSearchHandler}
            placeholder="リクエストタイトルで検索"
          />
        }
        menuTool={<RequestListTool handler={applicantSelectHandler} />}
        menuContents={
          <List
            list={convRequest(filterdRequests)}
            onClick={wrapOnClickRequestItem}
          />
          // <RequestList
          //   requests={filterdRequests}
          //   onClick={wrapOnClickRequestItem}
          // />
        }
        mainHeader={<RequestPanelHeader />}
        mainContents={
          mainContents.component ?? (
            <EmptyStateIcon msg="リクエストを選択してください" />
          )
        }
      />
    </>
  );
};

export default RequestManagement;
