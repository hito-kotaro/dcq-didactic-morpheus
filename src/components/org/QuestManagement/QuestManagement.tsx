import React from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import QuestList from './QuestList';
import { quests } from '../../../testData/QuestData';

const QuestManagement = () => {
  return (
    <SplitTemplate
      menuHeader={<div>MenuHeader</div>}
      menuTool={<div>MenuTool</div>}
      menuContents={<QuestList quests={quests} />}
      mainHeader={<div>mainHeader</div>}
      mainContents={<div>mainContents</div>}
    />
  );
};

export default QuestManagement;
