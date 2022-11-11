import React, { useEffect } from 'react';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import SplitTemplate from '../../templates/SplitTemplate';
import PenaltyHistoryDetail from '../../mol/Details/PenaltyHistoryDetail';
import PenaltyHistoryMenuHeader from '../../mol/PanelHeaders/PenaltyHistoryMenuHeader';
import PenaltyHistoryMenuTool from '../../mol/ListTools/PenaltyHistoryListTool';
import usePenaltyHistoryManagement from './usePenaltyHistoryManagement';
import PenaltyHistoryPanelHeader from '../../mol/PanelHeaders/PenaltyHistoryPanelHeader';
import ControlModal from '../../mol/ControlModal';
import useList from '../List/useList';
import List from '../List';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import useModal from '../../atoms/MyModal/useMyModal';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../../lib/constants';

const PenaltyHistoryManagement = () => {
  const {
    isDetail,
    issue,
    onClickListItem,
    filterdPenalties,
    filteringPenalty,
    teamSelectHandler,
    penaltySearchHandler,
  } = usePenaltyHistoryManagement();
  const { convPenaltyHis, pickItem } = useList();
  const [width, height] = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();
  const { issues } = useGlobalState();
  const { fetchAllIssue } = usePenaltyApi();
  const mainContents = useChangeComponent();

  const wrapOnclickListItem = (id: number) => {
    const i = pickItem(id, issues);
    if (width > MOBILE_WIDTH_MAX_LIMIT) {
      onClickListItem(i);
      mainContents.chComponent(<PenaltyHistoryDetail issue={i} />);
    } else {
      handleOpen();
      onClickListItem(i);
      mainContents.chComponent(
        <>
          <PenaltyHistoryPanelHeader isDetail={isDetail} issue={issue} />
          <PenaltyHistoryDetail issue={i} />
        </>,
      );
    }
  };

  useEffect(() => {
    fetchAllIssue();
  }, []);

  useEffect(() => {
    filteringPenalty(issues);
  }, [issues, penaltySearchHandler.value, teamSelectHandler.value]);
  return (
    <>
      <ControlModal
        open={open}
        handleClose={handleClose}
        content={mainContents.component ?? <div>no</div>}
      />

      <SplitTemplate
        menuHeader={
          <PenaltyHistoryMenuHeader
            penaltySearchHandler={penaltySearchHandler}
          />
        }
        menuTool={
          <PenaltyHistoryMenuTool teamSelectHandler={teamSelectHandler} />
        }
        menuContents={
          <List
            list={convPenaltyHis(filterdPenalties)}
            onClick={wrapOnclickListItem}
          />
        }
        mainHeader={
          <PenaltyHistoryPanelHeader isDetail={isDetail} issue={issue} />
        }
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
