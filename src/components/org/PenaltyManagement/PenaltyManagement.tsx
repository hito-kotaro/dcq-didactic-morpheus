import React, { useEffect } from 'react';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import SplitTemplate from '../../templates/SplitTemplate';
import PenaltyList from './PenaltyList';
import usePenaltyManagement from './usePenaltyManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import PenaltyDetail from './PenaltyDetail';
import PenaltyListTool from '../../mol/PenaltyListTool/PenaltyListTool';
import PenaltyPanelHeader from './PenaltyPanelHeader';
import PenaltyCreate from './PenaltyCreate';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import PenaltySearchWindow from './PenaltySearchWindow';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useGlobalState from '../../../stores/useGlobalState';

const PenaltyManagement = () => {
  const {
    penalty,
    filterdPenalties,
    isDetail,
    penaltySearchHandler,
    onClickPenaltyItem,
    filteringPenalty,
    selectHandler,
  } = usePenaltyManagement();
  const { fetchAllPenalty } = usePenaltyApi();
  const { penalties } = useGlobalState();
  const mainContents = useChangeComponent();

  useEffect(() => {
    fetchAllPenalty();
  }, []);

  useEffect(() => {
    filteringPenalty(penalties);
  }, [penalties, penaltySearchHandler.value, selectHandler.value]);

  const wrapOnClickPenaltyItem = (p: penaltyDataType) => {
    onClickPenaltyItem(p);
    mainContents.chComponent(<PenaltyDetail penalty={p} />);
  };

  const wrapOnClickCreatePenalty = () => {
    // create componentに切り替える
    mainContents.chComponent(<PenaltyCreate />);
  };

  return (
    <SplitTemplate
      menuHeader={
        <PenaltySearchWindow
          handler={penaltySearchHandler}
          onClickPenaltyCreate={wrapOnClickCreatePenalty}
        />
      }
      menuTool={<PenaltyListTool handler={selectHandler} />}
      menuContents={
        <PenaltyList
          penalties={filterdPenalties}
          onClick={wrapOnClickPenaltyItem}
        />
      }
      mainHeader={
        <PenaltyPanelHeader
          penalty={penalty}
          chComponent={mainContents.chComponent}
          isDetail={isDetail}
        />
      }
      mainContents={
        mainContents.component ?? (
          <EmptyStateIcon msg="ペナルティを選択してください" />
        )
      }
    />
  );
};

export default PenaltyManagement;
