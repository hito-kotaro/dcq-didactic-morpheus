import React, { VFC } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import QuestListItem from '../../mol/QuestListItem/QuestListItem';

type Props = {
  quests: questDataType[];
};
const QuestList: VFC<Props> = (props) => {
  const { quests } = props;
  return (
    <>
      {quests.map((q: questDataType) => (
        <QuestListItem quest={q} />
      ))}
    </>
  );
};

export default QuestList;
