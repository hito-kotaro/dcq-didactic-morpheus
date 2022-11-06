import React, { useEffect } from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import QuestList from './QuestList';
import useQuestManagement from './useQuestManagement';
import QuestDetail from '../../mol/Details/QuestDetail';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { questDataType } from '../../../types/data/questDataType';
import QuestListTool from '../../mol/ListTools/QuestListTool';
import QuestCreate from './QuestCreate';
import QuestPanelHeader from '../../mol/PanelHeaders/QuestPanelHeader';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import QuestSearchWindow from './QuestSearchWindow';
import useQuestApi from '../../../hooks/Api/useQuestApi';
import useGlobalState from '../../../stores/useGlobalState';
import List from '../List';
import useList from '../List/useList';

const QuestManagement = () => {
  const {
    quest,
    filterdQuests,
    isDetail,
    setIsDetail,
    questSearchHandler,
    selectHandler,
    onClickQuestItem,
    filteringQuest,
  } = useQuestManagement();
  const mainContents = useChangeComponent();
  const { quests } = useGlobalState();
  const { convQuest, pickItem } = useList();
  const { fetchAllQuests } = useQuestApi();

  const wrapOnClickQuestItem = (id: number) => {
    const q = pickItem(id, quests);
    onClickQuestItem(q);
    mainContents.chComponent(<QuestDetail quest={q} />);
  };

  const wrapOnclickQuestCreate = () => {
    setIsDetail(false);
    mainContents.chComponent(<QuestCreate />);
  };

  useEffect(() => {
    fetchAllQuests();
  }, []);

  useEffect(() => {
    filteringQuest(quests);
  }, [quests, questSearchHandler.value, selectHandler.value]);

  return (
    <SplitTemplate
      menuHeader={
        <QuestSearchWindow
          handler={questSearchHandler}
          onClickQuestCreate={wrapOnclickQuestCreate}
        />
      }
      menuTool={<QuestListTool handler={selectHandler} />}
      menuContents={
        <List list={convQuest(filterdQuests)} onClick={wrapOnClickQuestItem} />
        // <QuestList quests={filterdQuests} onClick={wrapOnClickQuestItem} />
      }
      mainHeader={
        <QuestPanelHeader
          quest={quest}
          chComponent={mainContents.chComponent}
          isDetail={isDetail}
        />
      }
      mainContents={
        mainContents.component ?? (
          <EmptyStateIcon msg="クエストを選択してください" />
        )
      }
    />
  );
};

export default QuestManagement;
