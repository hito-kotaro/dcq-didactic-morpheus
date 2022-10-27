import React, { useEffect } from 'react';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import { issueDataType } from '../../../types/data/penaltyDataType';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import SplitTemplate from '../../templates/SplitTemplate';
import PenaltyHistoryDetail from './PenaltyHistoryDetail';
import PenaltyHistoryList from './PenaltyHistoryList';
import PenaltyHistoryMenuHeader from './PenaltyHistoryMenuHeader';
import PenaltyHistoryMenuTool from './PenaltyHistoryMenuTool';
import PenaltyHistoryPanelHeader from './PenaltyHistoryPanelHeader';
import usePenaltyHistoryManagement from './usePenaltyHistoryManagement';

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
  const { issues } = useGlobalState();
  const { fetchAllIssue } = usePenaltyApi();
  const mainContents = useChangeComponent();

  const wrapOnclickListItem = (i: issueDataType) => {
    onClickListItem(i);
    mainContents.chComponent(<PenaltyHistoryDetail issue={i} />);
  };

  useEffect(() => {
    fetchAllIssue();
  }, []);

  useEffect(() => {
    filteringPenalty(issues);
  }, [issues, penaltySearchHandler.value, teamSelectHandler.value]);
  return (
    <SplitTemplate
      menuHeader={
        <PenaltyHistoryMenuHeader penaltySearchHandler={penaltySearchHandler} />
      }
      menuTool={
        <PenaltyHistoryMenuTool teamSelectHandler={teamSelectHandler} />
      }
      menuContents={
        <PenaltyHistoryList
          issues={filterdPenalties}
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
  );
};

export default PenaltyHistoryManagement;
