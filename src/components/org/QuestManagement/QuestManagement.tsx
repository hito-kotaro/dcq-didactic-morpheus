import React, { useEffect } from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import QuestList from './QuestList';
import { quests } from '../../../testData/QuestData';
import useQuestManagement from './useQuestManagement';
import QuestDetail from './QuestDetail';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { questDataType } from '../../../types/data/questDataType';
import QuestListTool from '../../mol/QuestListTool/QuestListTool';
import QuestCreate from './QuestCreate';
import QuestPanelHeader from './QuestPanelHeader';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';

const QuestManagement = () => {
  const {
    quest,
    filterdQuests,
    isDetail,
    setIsDetail,
    questSearchHandler,
    onClickQuestItem,
    filteringQuest,
  } = useQuestManagement();
  const mainContents = useChangeComponent();

  const wrapOnClickQuestItem = (q: questDataType) => {
    onClickQuestItem(q);
    mainContents.chComponent(<QuestDetail quest={q} />);
  };

  const wrapOnclickCreateQuest = () => {
    setIsDetail(false);
    mainContents.chComponent(<QuestCreate />);
  };
  useEffect(() => {
    filteringQuest(quests);
  }, [questSearchHandler.value]);

  return (
    <SplitTemplate
      menuHeader={
        <QuestListTool
          handler={questSearchHandler}
          onClickCreate={wrapOnclickCreateQuest}
        />
      }
      menuTool={
        <QuestListTool
          handler={questSearchHandler}
          onClickCreate={wrapOnclickCreateQuest}
        />
      }
      menuContents={
        <QuestList quests={filterdQuests} onClick={wrapOnClickQuestItem} />
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
