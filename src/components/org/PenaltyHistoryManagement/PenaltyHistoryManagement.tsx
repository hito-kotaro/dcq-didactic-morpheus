import React, { useEffect } from 'react';
import { assinedPenalty } from '../../../testData/PenaltyData';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
import SplitTemplate from '../../templates/SplitTemplate';
import PenaltyHistoryList from './PenaltyHistoryList';
import PenaltyHistoryMenuHeader from './PenaltyHistoryMenuHeader';
import PenaltyHistoryMenuTool from './PenaltyHistoryMenuTool';
import usePenaltyHistoryManagement from './usePenaltyHistoryManagement';

const PenaltyHistoryManagement = () => {
  const {
    filterdPenalties,
    filteringPenalty,
    teamSelectHandler,
    penaltySearchHandler,
  } = usePenaltyHistoryManagement();

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
          onClick={(p: assignedPenaltyDateType) => {}}
        />
      }
      mainHeader={<div>main header</div>}
      mainContents={<div>main contents</div>}
    />
  );
};

export default PenaltyHistoryManagement;
