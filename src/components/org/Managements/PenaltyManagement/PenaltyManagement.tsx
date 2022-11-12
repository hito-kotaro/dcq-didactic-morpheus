import React, { useEffect } from 'react';

// components
import ControlModal from '../../../mol/ControlModal';
import EmptyStateIcon from '../../../atoms/EmptyStateIcon/EmptyStateIcon';
import List from '../../../mol/List';
import PenaltyDetail from '../../../mol/Details/PenaltyDetail';
import PenaltyListTool from '../../../mol/ListTools/PenaltyListTool';
import PenaltyPanelHeader from '../../../mol/PanelHeaders/PenaltyPanelHeader';
import PenaltyCreate from './PenaltyCreate';
import PenaltySearchWindow from './PenaltySearchWindow';
import SplitTemplate from '../../../templates/SplitTemplate';

// custom hooks
import useModal from '../../../atoms/MyModal/useMyModal';
import useList from '../../../mol/List/useList';
import usePenaltyManagement from './usePenaltyManagement';
import usePenaltyApi from '../../../../hooks/Api/usePenaltyApi';
import useChangeComponent from '../../../../hooks/ChangeComponent/useChangeComponent';
import useIsMobile from '../../../../stores/IsMobileStore/useIsMobile';
import useGlobalState from '../../../../stores/useGlobalState';

const PenaltyManagement = () => {
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();

  const { filterd, searchHandler, filtering, selectHandler } =
    usePenaltyManagement();
  const { convPenalty, pickItem } = useList();
  const { open, handleOpen, handleClose } = useModal();
  const { fetchAllPenalty } = usePenaltyApi();
  const { penalties } = useGlobalState();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    fetchAllPenalty();
  }, []);

  useEffect(() => {
    filtering(penalties);
  }, [penalties, searchHandler.value, selectHandler.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

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

  // ------------------------------------ //
  //    END  wrap List Item click action  //
  // ------------------------------------ //

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
          <List list={convPenalty(filterd)} onClick={onClickPenalty} />
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
