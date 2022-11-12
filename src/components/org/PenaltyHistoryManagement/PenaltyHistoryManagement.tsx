import React, { useEffect } from 'react';

// components
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import ControlModal from '../../mol/ControlModal';
import List from '../../mol/List';
import PenaltyHistoryDetail from '../../mol/Details/PenaltyHistoryDetail';
import PenaltyHistoryMenuHeader from '../../mol/PanelHeaders/PenaltyHistoryMenuHeader';
import PenaltyHistoryMenuTool from '../../mol/ListTools/PenaltyHistoryListTool';
import PenaltyHistoryPanelHeader from '../../mol/PanelHeaders/PenaltyHistoryPanelHeader';
import SplitTemplate from '../../templates/SplitTemplate';

// custom hooks
import usePenaltyHistoryManagement from './usePenaltyHistoryManagement';
import useList from '../../mol/List/useList';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import useModal from '../../atoms/MyModal/useMyModal';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

const PenaltyHistoryManagement = () => {
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();

  const { filterd, filtering, selectHandler, searchHandler } =
    usePenaltyHistoryManagement();
  const { convPenaltyHis, pickItem } = useList();
  const { open, handleOpen, handleClose } = useModal();
  const { issues } = useGlobalState();
  const { fetchAllIssue } = usePenaltyApi();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    fetchAllIssue();
  }, []);

  useEffect(() => {
    filtering(issues);
  }, [issues, searchHandler.value, selectHandler.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

  const onClickPenalty = (id: number) => {
    const i = pickItem(id, issues);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <>
          <PenaltyHistoryPanelHeader issue={i} />
          <PenaltyHistoryDetail issue={i} />
        </>,
      );
    } else {
      mainHeaderContents.chComponent(<PenaltyHistoryPanelHeader issue={i} />);
      mainContents.chComponent(<PenaltyHistoryDetail issue={i} />);
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
          <PenaltyHistoryMenuHeader penaltySearchHandler={searchHandler} />
        }
        menuTool={<PenaltyHistoryMenuTool teamSelectHandler={selectHandler} />}
        menuContents={
          <List list={convPenaltyHis(filterd)} onClick={onClickPenalty} />
        }
        mainHeader={mainHeaderContents.component ?? <div>ペナルティ管理</div>}
        mainContents={
          mainContents.component ?? (
            <EmptyStateIcon msg="ペナルティを選択してください" />
          )
        }
      />
    </>
  );
};

export default PenaltyHistoryManagement;
