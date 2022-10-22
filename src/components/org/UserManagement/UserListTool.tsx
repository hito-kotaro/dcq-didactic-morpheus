import React, { VFC } from 'react';
import { selectHandlerType } from '../../../types/inputHandlerType';
import SelectForm from '../../mol/SelectForm/SelectForm';
import { selectItemType } from '../../mol/SelectForm/selectItemType';

type Props = {
  handler: selectHandlerType;
};

const UserListTool: VFC<Props> = (props) => {
  const { handler } = props;

  const roleSelectMenu: selectItemType[] = [
    { id: 0, label: 'all' },
    { id: 1, label: 'member' },
    { id: 2, label: 'leader' },
    { id: 3, label: 'master' },
  ];

  return (
    <div className="flex">
      <div className="w-4/6">
        <SelectForm
          label="ロールで絞り込み"
          handler={handler}
          menu={roleSelectMenu}
        />
      </div>
    </div>
  );
};

export default UserListTool;
