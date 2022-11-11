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
import ControlModal from '../../mol/ControlModal';
import List from '../List';
import useModal from '../../atoms/MyModal/useMyModal';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import { MOBILE_WIDTH_MAX_LIMIT } from '../../../lib/constants';

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
  const { open, handleOpen, handleClose } = useModal();
  const { fetchAllPenalty } = usePenaltyApi();
  const { penalties } = useGlobalState();
  const mainContents = useChangeComponent();
  const [width, height] = useWindowSize();

  useEffect(() => {
    fetchAllPenalty();
  }, []);

  useEffect(() => {
    filteringPenalty(penalties);
  }, [penalties, penaltySearchHandler.value, selectHandler.value]);

  const wrapOnClickPenaltyItem = (id: number) => {
    const p = pickItem(id, penalties);
    if (width > MOBILE_WIDTH_MAX_LIMIT) {
      onClickPenaltyItem(p);
      mainContents.chComponent(<PenaltyDetail penalty={p} />);
    } else {
      handleOpen();
      onClickPenaltyItem(p);
      mainContents.chComponent(
        <PenaltyDetail penalty={p} handleClose={handleClose} />,
      );
    }
  };

  const wrapOnClickCreatePenalty = () => {
    // create componentに切り替える
    mainContents.chComponent(<PenaltyCreate />);
  };

  return (
    <>
      <ControlModal
        open={open}
        handleClose={handleClose}
        content={mainContents.component ?? <div>no</div>}
      />

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
    </>
  );
};

export default PenaltyManagement;
