import React, { useEffect } from 'react';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import SplitTemplate from '../../templates/SplitTemplate';
import PenaltyList from './PenaltyList';
import { penalties } from '../../../testData/PenaltyData';
import usePenaltyManagement from './usePenaltyManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import PenaltyDetail from './PenaltyDetail';
import PenaltyListTool from '../../mol/PenaltyListTool/PenaltyListTool';
import PenaltyPanelHeader from './PenaltyPanelHeader';
import PenaltyUpdate from './PenaltyUpdate';
import PenaltyCreate from './PenaltyCreate';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';

const PenaltyManagement = () => {
  const dummy = (p: penaltyDataType) => {};
  const {
    penalty,
    filterdPenalties,
    isDetail,
    penaltySearchHandler,
    onClickPenaltyItem,
    filteringPenalty,
  } = usePenaltyManagement();
  const mainContents = useChangeComponent();

  useEffect(() => {
    filteringPenalty(penalties);
  }, [penaltySearchHandler.value]);

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
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={
        <PenaltyListTool
          handler={penaltySearchHandler}
          onClick={wrapOnClickCreatePenalty}
        />
      }
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
