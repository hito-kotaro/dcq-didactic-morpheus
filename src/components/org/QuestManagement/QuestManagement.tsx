import React from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import QuestList from './QuestList';
import { quests } from '../../../testData/QuestData';
import useQuestManagement from './useQuestManagement';
import QuestDetail from './QuestDetail';

const QuestManagement = () => {
  const { quest, owner, onClickQuestItem } = useQuestManagement();
  return (
    <SplitTemplate
      menuHeader={<div>MenuHeader</div>}
      menuTool={<div>MenuTool</div>}
      menuContents={<QuestList quests={quests} onClick={onClickQuestItem} />}
      mainHeader={<div>mainHeader</div>}
      mainContents={<QuestDetail quest={quest} owner={owner} />}
    />
  );
};

export default QuestManagement;
