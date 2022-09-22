/* eslint-disable no-nested-ternary */
import React, { ReactElement, VFC } from 'react';
import { userDataType } from '../../../types/data/userDataType';
import MenuButton from '../../mol/MenuButton/MenuButton';
import MyModal from '../../mol/MyModal/MyModal';
import useMyModal from '../../mol/MyModal/useMyModal';
import UserAtrbuteUpdate from './UserAtrbuteUpdate';
import UserNameUpdate from './UserNameUpdate';
import UserPwdUpdate from './UserPwdUpdate';

type Props = {
  user: userDataType;
  toggleUpdate: () => void;
  chComponent: (component: ReactElement) => void;
  mainComponent: ReactElement;
  headerMsg: string;
  isDetail: boolean;
};

const UserPanelHeader: VFC<Props> = (props) => {
  const { isDetail, user, chComponent } = props;
  const { open, handleOpen, handleClose } = useMyModal();

  const userNameUpdate = () => {
    chComponent(<UserNameUpdate currentName={user.name} />);
  };
  const pwdUpdate = () => {
    chComponent(<UserPwdUpdate name={user.name} />);
  };
  const atrUpdate = () => {
    chComponent(<UserAtrbuteUpdate user={user} />);
  };

  const menuItems: { label: string; onClick: () => void }[] = [
    { label: 'ユーザを削除', onClick: handleOpen },
    { label: 'ユーザ名を変更', onClick: userNameUpdate },
    { label: 'パスワードを変更', onClick: pwdUpdate },
    { label: 'ユーザ属性を変更', onClick: atrUpdate },
  ];

  const deleteUser = () => {
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
      <span className="text-2xl font-semibold text-text">ユーザ管理</span>
      <div className="flex justify-end">
        {isDetail ? <MenuButton menuItems={menuItems} /> : ''}
      </div>
    </div>
  );
};

export default UserPanelHeader;
