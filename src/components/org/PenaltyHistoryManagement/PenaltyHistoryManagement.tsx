import React, { useEffect } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { assinedPenalty } from '../../../testData/PenaltyData';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
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
    penalty,
    onClickListItem,
    filterdPenalties,
    filteringPenalty,
    teamSelectHandler,
    penaltySearchHandler,
  } = usePenaltyHistoryManagement();

  const mainContents = useChangeComponent();

  const wrapOnclickListItem = (p: assignedPenaltyDateType) => {
    onClickListItem(p);
    mainContents.chComponent(<PenaltyHistoryDetail penalty={p} />);
  };
  useEffect(() => {
    filteringPenalty(assinedPenalty);
  }, [penaltySearchHandler.value, teamSelectHandler.value]);
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
          penalties={filterdPenalties}
          onClick={wrapOnclickListItem}
        />
      }
      mainHeader={
        <PenaltyHistoryPanelHeader isDetail={isDetail} penalty={penalty} />
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
