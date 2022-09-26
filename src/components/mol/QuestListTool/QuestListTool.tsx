/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { VFC } from 'react';
import { selectHandlerType } from '../../../types/inputHandlerType';
import { quests } from '../../../testData/QuestData';
import { questDataType } from '../../../types/data/questDataType';
import SelectForm from '../SelectForm/SelectForm';
import { selectItemType } from '../SelectForm/selectItemType';

type Props = {
  handler: selectHandlerType;
};

const QuestListTool: VFC<Props> = (props) => {
  const { handler } = props;

  const userToSelectMenu = () => {
    const owners = quests.map((q: questDataType) => ({
      id: q.owner_id,
      label: q.owner,
    }));

    const dupDel = owners.filter((o: selectItemType, i, self) => {
      const tmp = self.map((item: selectItemType) => item.id);
      if (tmp.indexOf(o.id) === i) {
        return o;
      }
    });

    return [{ id: 0, label: 'all' }, ...dupDel];
  };

  return (
    <div className="flex">
      <div className="w-4/6">
        <SelectForm
          label="クエストオーナーで絞り込み"
          handler={handler}
          menu={userToSelectMenu()}
        />
      </div>
    </div>
  );
};

export default QuestListTool;
