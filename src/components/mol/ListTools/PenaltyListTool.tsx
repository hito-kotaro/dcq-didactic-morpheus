/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { VFC } from 'react';
import useGlobalState from '../../../stores/useGlobalState';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import { selectHandlerType } from '../../../types/inputHandlerType';
import SelectForm from '../SelectForm/SelectForm';
import { selectItemType } from '../SelectForm/selectItemType';

type Props = {
  handler: selectHandlerType;
};
const PenaltyListTool: VFC<Props> = (props) => {
  const { handler } = props;
  const { penalties } = useGlobalState();

  const penaltyToSelectMenu = () => {
    const owners = penalties.map((p: penaltyDataType) => ({
      id: p.owner_id,
      label: p.owner,
    }));

    const dupDel = owners.filter((o: selectItemType, i, self) => {
      const tmp = self.map((item: selectItemType) => item.id);
      if (tmp.indexOf(o.id) === i) {
        return o;
      }
    });
    console.log(dupDel);
    return [{ id: 0, label: 'all' }, ...dupDel];
  };
  return (
    <div className="flex">
      <div className="w-4/6">
        <SelectForm
          label="ペナルティオーナーで絞り込み"
          handler={handler}
          menu={penaltyToSelectMenu()}
        />
      </div>
    </div>
  );
};

export default PenaltyListTool;
