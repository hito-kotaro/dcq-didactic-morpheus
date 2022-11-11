import React, { useEffect } from 'react';

// components
import ControlModal from '../../mol/ControlModal';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import List from '../List';
import PenaltyDetail from '../../mol/Details/PenaltyDetail';
import PenaltyListTool from '../../mol/ListTools/PenaltyListTool';
import PenaltyPanelHeader from '../../mol/PanelHeaders/PenaltyPanelHeader';
import PenaltyCreate from './PenaltyCreate';
import PenaltySearchWindow from './PenaltySearchWindow';
import SplitTemplate from '../../templates/SplitTemplate';

import { MOBILE_WIDTH_MAX_LIMIT } from '../../../lib/constants';

// custom hooks
import useList from '../List/useList';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useGlobalState from '../../../stores/useGlobalState';
import useModal from '../../atoms/MyModal/useMyModal';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import usePenaltyManagement from './usePenaltyManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

const PenaltyManagement = () => {
  const { filterd, searchHandler, filtering, selectHandler } =
    usePenaltyManagement();
  const { convPenalty, pickItem } = useList();
  const { open, handleOpen, handleClose } = useModal();
  const { fetchAllPenalty } = usePenaltyApi();
  const { penalties } = useGlobalState();
  const { isMobile } = useIsMobile();
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();

  useEffect(() => {
    fetchAllPenalty();
  }, []);

  useEffect(() => {
    filtering(penalties);
  }, [penalties, searchHandler.value, selectHandler.value]);

  const onClickPenalty = (id: number) => {
    const p = pickItem(id, penalties);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <>
          <PenaltyPanelHeader
            penalty={p}
            chComponent={mainContents.chComponent}
          />
          <PenaltyDetail penalty={p} handleClose={handleClose} />
        </>,
      );
    } else {
      mainHeaderContents.chComponent(
        <PenaltyPanelHeader
          penalty={p}
          chComponent={mainContents.chComponent}
        />,
      );
      mainContents.chComponent(<PenaltyDetail penalty={p} />);
    }
  };

  const onClickCreate = () => {
    // create componentに切り替える
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(<PenaltyCreate />);
    } else {
      mainContents.chComponent(<PenaltyCreate />);
    }
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
            handler={searchHandler}
            onClickPenaltyCreate={onClickCreate}
          />
        }
        menuTool={<PenaltyListTool handler={selectHandler} />}
        menuContents={
          <List list={convPenalty(filterd)} onClick={onClickCreate} />
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

export default PenaltyManagement;
