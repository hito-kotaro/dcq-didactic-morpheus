import React, { VFC } from 'react';
import { questDataType } from '../../../../types/data/questDataType';
import QuestListItem from '../../../atoms/ListItems/QuestListItem';

type Props = {
  quests: questDataType[];
  onClick: (q: questDataType) => void;
};

const QuestList: VFC<Props> = (props) => {
  const { quests, onClick } = props;
  return (
    <>
      {quests.map((q: questDataType) => (
        <QuestListItem quest={q} onClick={onClick} />
      ))}
    </>
  );
};

export default QuestList;
