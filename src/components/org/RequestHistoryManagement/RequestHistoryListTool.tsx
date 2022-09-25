import React, { VFC } from 'react';
import { users } from '../../../testData/UserData';
import { userDataType } from '../../../types/data/userDataType';
import { selectHandlerType } from '../../../types/inputHandlerType';
import SelectForm from '../../mol/SelectForm/SelectForm';
import { selectItemType } from '../../mol/SelectForm/selectItemType';

type Props = {
  userSelectHandler: selectHandlerType;
  statusSelectHandler: selectHandlerType;
};
const RequestHistoryListTool: VFC<Props> = (props) => {
  const { userSelectHandler, statusSelectHandler } = props;

  const userToSelectMenu = () => {
    const tmp = users.map((u: userDataType) => ({ id: u.id, label: u.name }));
    return [{ id: 0, label: 'all' }, ...tmp];
  };

  const statusSelectMenu: selectItemType[] = [
    { id: 0, label: 'all' },
    { id: 1, label: 'open' },
    { id: 2, label: 'approved' },
    { id: 3, label: 'rejected' },
    { id: 4, label: 'canceled' },
  ];

  return (
    <div className="flex">
      <div className=" w-6/12">
        <SelectForm
          label="ユーザ名で絞り込み"
          handler={userSelectHandler}
          menu={userToSelectMenu()}
        />
      </div>
      <div className="w-1/12" />
      <div className=" w-5/12">
        <SelectForm
          label="statusで絞り込み"
          handler={statusSelectHandler}
          menu={statusSelectMenu}
        />
      </div>
    </div>
  );
};

export default RequestHistoryListTool;
