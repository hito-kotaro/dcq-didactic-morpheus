import React, { useEffect } from 'react';

// components
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import ControlModal from '../../mol/ControlModal';
import List from '../List';
import RequestHistoryDetail from '../../mol/Details/RequestHistoryDetail';
import RequestHistoryListTool from '../../mol/ListTools/RequestHistoryListTool';
import RequestHistoryMenuHeader from '../../mol/PanelHeaders/RequestHistoryMenuHeader';
import RequestHistoryPanelHeader from '../../mol/PanelHeaders/RequestHistoryPanelHeader';
import SplitTemplate from '../../templates/SplitTemplate';

// custom hooks
import useRequestHistoryManagement from './useRequestHistoryManagement';
import useList from '../List/useList';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import useModal from '../../atoms/MyModal/useMyModal';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

// types
import { requestDataType } from '../../../types/data/requestDataType';

const RequestHistoryManagement = () => {
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();

  const { filterd, filtering, searchHandler, userSelect, statusSelect } =
    useRequestHistoryManagement();
  const { convRequest, pickItem } = useList();
  const { isMobile } = useIsMobile();
  const { open, handleOpen, handleClose } = useModal();
  const { requests } = useGlobalState();
  const { fetchTenantRequests } = useRequestApi();

  useEffect(() => {
    fetchTenantRequests();
  }, []);

  useEffect(() => {
    filtering(
      requests.filter((r: requestDataType) => {
        return r.status !== 'open';
      }),
    );
  }, [requests, searchHandler.value, statusSelect.value, userSelect.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

  const onClickRequest = (id: number) => {
    const r = pickItem(id, requests);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <>
          <RequestHistoryPanelHeader request={r} />
          <RequestHistoryDetail request={r} />
        </>,
      );
    } else {
      mainHeaderContents.chComponent(<RequestHistoryPanelHeader request={r} />);
      mainContents.chComponent(<RequestHistoryDetail request={r} />);
    }
  };

  // ------------------------------------ //
  //    END  wrap List Item click action  //
  // ------------------------------------ //

  return (
    <>
      <ControlModal
        open={open}
        handleClose={handleClose}
        content={mainContents.component ?? <div>no</div>}
      />

      <SplitTemplate
        menuHeader={
          <RequestHistoryMenuHeader requestSearchHandler={searchHandler} />
        }
        menuTool={
          <RequestHistoryListTool
            userSelectHandler={userSelect}
            statusSelectHandler={statusSelect}
          />
        }
        menuContents={
          <List list={convRequest(filterd)} onClick={onClickRequest} />
        }
        mainHeader={mainHeaderContents.component ?? <div>リクエスト履歴</div>}
        mainContents={
          mainContents.component ?? (
            <EmptyStateIcon msg="リクエストを選択してください" />
          )
        }
      />
    </>
  );
};

export default RequestHistoryManagement;
