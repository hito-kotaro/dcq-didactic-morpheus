/* eslint-disable no-nested-ternary */
import React, { VFC } from 'react';
import { userDataType } from '../../../types/data/userDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';

type Props = {
  user: userDataType;
  toggleUpdate: () => void;
  headerMsg: string;
  isCreate: boolean;
  isUpdate: boolean;
};

const UserPanelHeader: VFC<Props> = (props) => {
  const { isUpdate, isCreate, user, toggleUpdate } = props;
  const { open, handleOpen, handleClose } = useMyModal();
  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ユーザを削除', onClick: handleOpen },
    { label: 'ユーザ情報を更新', onClick: toggleUpdate },
  ];

  const deleteUser = () => {
    console.log(`delete ${user.name}`);
    handleClose();
  };
  return (
    <div className="pt-7 text-center">
      <MyModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        mainMsg={`${user.name}を削除しますか？`}
        subMsg="削除したユーザの獲得ポイント/付与ペナルティも消滅します。"
        positiveBtnMsg="削除"
        positiveBtnAction={deleteUser}
      />
      <span className="text-2xl font-semibold">ユーザ管理</span>
      <div className="flex justify-end">
        {user.name !== '' ? <MenuButton menuItems={menuItems} /> : ''}
      </div>
    </div>
  );
};

export default UserPanelHeader;
