import React, { useEffect } from 'react';

// components
import ControlModal from '../../mol/ControlModal';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import List from '../List';
import QuestDetail from '../../mol/Details/QuestDetail';
import QuestListTool from '../../mol/ListTools/QuestListTool';
import QuestCreate from './QuestCreate';
import QuestPanelHeader from '../../mol/PanelHeaders/QuestPanelHeader';
import QuestSearchWindow from './QuestSearchWindow';
import SplitTemplate from '../../templates/SplitTemplate';

// custom hooks
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useGlobalState from '../../../stores/useGlobalState';
import useModal from '../../atoms/MyModal/useMyModal';
import useList from '../List/useList';
import useQuestManagement from './useQuestManagement';
import useQuestApi from '../../../hooks/Api/useQuestApi';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

const QuestManagement = () => {
  const { quest, filterd, searchHandler, selectHandler, setQuest, filtering } =
    useQuestManagement();
  const mainContents = useChangeComponent();
  const { isMobile } = useIsMobile();
  const { quests } = useGlobalState();
  const { convQuest, pickItem } = useList();
  const { fetchAllQuests } = useQuestApi();
  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    fetchAllQuests();
  }, []);

  useEffect(() => {
    filtering(quests);
  }, [quests, searchHandler.value, selectHandler.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

  const onClickQuest = (id: number) => {
    const q = pickItem(id, quests);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(<QuestDetail quest={q} />);
    } else {
      setQuest(q);
      mainContents.chComponent(<QuestDetail quest={q} />);
    }
  };

  const onClickCreate = () => {
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(<QuestCreate handleClose={handleClose} />);
    } else {
      mainContents.chComponent(<QuestCreate />);
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
          <QuestSearchWindow
            handler={searchHandler}
            onClickQuestCreate={onClickCreate}
          />
        }
        menuTool={<QuestListTool handler={selectHandler} />}
        menuContents={<List list={convQuest(filterd)} onClick={onClickQuest} />}
        mainHeader={
          <QuestPanelHeader
            quest={quest}
            chComponent={mainContents.chComponent}
          />
        }
        mainContents={
          mainContents.component ?? (
            <EmptyStateIcon msg="クエストを選択してください" />
          )
        }
      />
    </>
  );
};

export default QuestManagement;
