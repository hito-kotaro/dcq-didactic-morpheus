import React, { useEffect } from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import QuestList from './QuestList';
import { quests } from '../../../testData/QuestData';
import useQuestManagement from './useQuestManagement';
import QuestDetail from './QuestDetail';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { questDataType } from '../../../types/data/questDataType';
import { users } from '../../../testData/UserData';
import { userDataType } from '../../../types/data/userDataType';
import QuestListTool from '../../mol/QuestListTool/QuestListTool';
import QuestCreate from './QuestCreate';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import QuestPanelHeader from './QuestPanelHeader';

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
    mainContents.chComponent(<QuestDetail quest={q} owner={q.owner} />);
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
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
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
          <div className="text-text text-lg font-semibold text-center border-b-1">
            クエストを選択してください
          </div>
        )
      }
    />
  );
};

export default QuestManagement;
