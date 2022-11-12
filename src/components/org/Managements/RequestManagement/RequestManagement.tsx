import React, { useEffect } from 'react';

// components
import ControlModal from '../../../mol/ControlModal';
import EmptyStateIcon from '../../../atoms/EmptyStateIcon/EmptyStateIcon';
import List from '../../../mol/List';
import RequestDetail from '../../../mol/Details/RequestDetail';
import RequestPanelHeader from '../../../mol/PanelHeaders/RequestPanelHeader';
import RequestListTool from '../../../mol/ListTools/RequestListTool';
import SearchWindow from '../../../mol/SearchWindow/SearchWindow';
import SplitTemplate from '../../../templates/SplitTemplate';

// custom hooks
import useChangeComponent from '../../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../../stores/useGlobalState';
import useModal from '../../../atoms/MyModal/useMyModal';
import useList from '../../../mol/List/useList';
import useRequestmanagement from './useRequestmanagement';
import useRequestApi from '../../../../hooks/Api/useRequestApi';
import useIsMobile from '../../../../stores/IsMobileStore/useIsMobile';

// types
import { requestDataType } from '../../../../types/data/requestDataType';

const RequestManagement = () => {
  const mainContents = useChangeComponent();

  const { filterd, searchHandler, filtering, selectHandler } =
    useRequestmanagement();
  const { isMobile } = useIsMobile();
  const { open, handleOpen, handleClose } = useModal();
  const { convRequest, pickItem } = useList();
  const { requests } = useGlobalState();
  const { fetchTenantRequests } = useRequestApi();

  useEffect(() => {
    fetchTenantRequests();
  }, []);

  useEffect(() => {
    filtering(requests.filter((r: requestDataType) => r.status === 'open'));
    mainContents.chComponent(
      <EmptyStateIcon msg="リクエストを選択してください" />,
    );
  }, [requests, searchHandler.value, selectHandler.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

  const onClickRequest = (id: number) => {
    const r = pickItem(id, requests);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <RequestDetail request={r} handleClose={handleClose} />,
      );
    } else {
      mainContents.chComponent(<RequestDetail request={r} />);
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
          <SearchWindow
            handler={searchHandler}
            placeholder="リクエストタイトルで検索"
          />
        }
        menuTool={<RequestListTool handler={selectHandler} />}
        menuContents={
          <List list={convRequest(filterd)} onClick={onClickRequest} />
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
