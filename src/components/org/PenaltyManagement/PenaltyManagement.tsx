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
    // mainContents.chComponent()
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
      mainHeader={<PenaltyPanelHeader />}
      mainContents={
        mainContents.component ?? (
          <div className="text-text text-lg font-semibold text-center border-b-1">
            ペナルティを選択してください
          </div>
        )
      }
    />
  );
};

export default PenaltyManagement;
