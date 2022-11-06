import React, { useEffect } from 'react';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import SplitTemplate from '../../templates/SplitTemplate';
import PenaltyList from '../List/PenaltyList';
import usePenaltyManagement from './usePenaltyManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import PenaltyDetail from '../../mol/Details/PenaltyDetail';
import PenaltyListTool from '../../mol/ListTools/PenaltyListTool';
import PenaltyPanelHeader from '../../mol/PanelHeaders/PenaltyPanelHeader';
import PenaltyCreate from './PenaltyCreate';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import PenaltySearchWindow from './PenaltySearchWindow';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useGlobalState from '../../../stores/useGlobalState';
import useList from '../List/useList';
import List from '../List';

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
  const { convPenalty, pickItem } = useList();
  const { fetchAllPenalty } = usePenaltyApi();
  const { penalties } = useGlobalState();
  const mainContents = useChangeComponent();

  useEffect(() => {
    fetchAllPenalty();
  }, []);

  useEffect(() => {
    filteringPenalty(penalties);
  }, [penalties, penaltySearchHandler.value, selectHandler.value]);

  const wrapOnClickPenaltyItem = (id: number) => {
    const p = pickItem(id, penalties);
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
        <List
          list={convPenalty(filterdPenalties)}
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
