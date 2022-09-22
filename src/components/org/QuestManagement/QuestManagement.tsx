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

const QuestManagement = () => {
  const {
    quest,
    filterdQuests,
    owner,
    questSearchHandler,
    onClickQuestItem,
    filteringQuest,
  } = useQuestManagement();
  const mainContents = useChangeComponent();

  const wrapOnClickQuestItem = (q: questDataType) => {
    onClickQuestItem(q);
    const o: userDataType[] = users.filter(
      (u: userDataType) => u.id === q.owner_id,
    );
    mainContents.chComponent(<QuestDetail quest={q} owner={o[0]} />);
  };

  useEffect(() => {
    filteringQuest(quests);
  }, [questSearchHandler.value]);

  return (
    <SplitTemplate
      menuHeader={<div>MenuHeader</div>}
      menuTool={<QuestListTool handler={questSearchHandler} />}
      menuContents={
        <QuestList quests={filterdQuests} onClick={wrapOnClickQuestItem} />
      }
      mainHeader={<div>mainHeader</div>}
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
