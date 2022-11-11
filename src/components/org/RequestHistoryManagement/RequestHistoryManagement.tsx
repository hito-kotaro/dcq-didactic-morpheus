import React, { useEffect } from 'react';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import { requestDataType } from '../../../types/data/requestDataType';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import SplitTemplate from '../../templates/SplitTemplate';
import RequestHistoryDetail from '../../mol/Details/RequestHistoryDetail';
import RequestHistoryListTool from '../../mol/ListTools/RequestHistoryListTool';
import RequestHistoryMenuHeader from '../../mol/PanelHeaders/RequestHistoryMenuHeader';
import useRequestHistoryManagement from './useRequestHistoryManagement';
import RequestHistoryPanelHeader from '../../mol/PanelHeaders/RequestHistoryPanelHeader';
import ControlModal from '../../mol/ControlModal';
import List from '../List';
import useList from '../List/useList';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import useModal from '../../atoms/MyModal/useMyModal';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../../lib/constants';

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
  const { convRequest, pickItem } = useList();
  const [width, height] = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();
  const mainComponents = useChangeComponent();
  const { requests } = useGlobalState();
  const { fetchTenantRequests } = useRequestApi();

  const wrapOnClickListItem = (id: number) => {
    const r = pickItem(id, requests);
    if (width > MOBILE_WIDTH_MAX_LIMIT) {
      onClickListItem(r);
      mainComponents.chComponent(<RequestHistoryDetail request={r} />);
    } else {
      handleOpen();
      onClickListItem(r);
      mainComponents.chComponent(
        <>
          <RequestHistoryPanelHeader isDetail={isDetail} request={request} />
          <RequestHistoryDetail request={r} />
        </>,
      );
    }
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
    <>
      <ControlModal
        open={open}
        handleClose={handleClose}
        content={mainComponents.component ?? <div>no</div>}
      />

      <SplitTemplate
        menuHeader={
          <RequestHistoryMenuHeader
            requestSearchHandler={requestSearchHandler}
          />
        }
        menuTool={
          <RequestHistoryListTool
            userSelectHandler={userSelectHandler}
            statusSelectHandler={statusSelectHandler}
          />
        }
        menuContents={
          <List
            list={convRequest(filterdRequests)}
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
    </>
  );
};

export default RequestHistoryManagement;
