import React, { ReactElement, VFC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { userDataType } from '../../../types/data/userDataType';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MyModal from '../../atoms/MyModal/MyModal';
import useMyModal from '../../atoms/MyModal/useMyModal';
import UserAtrbuteUpdate from '../../org/UserManagement/UserAtrbuteUpdate';
import UserNameUpdate from '../../org/UserManagement/UserNameUpdate';
import UserPwdUpdate from '../../org/UserManagement/UserPwdUpdate';

type Props = {
  user: userDataType;
  // eslint-disable-next-line no-unused-vars
  chComponent: (component: ReactElement) => void;
};

const UserPanelHeader: VFC<Props> = (props) => {
  const { user, chComponent } = props;
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
        <MenuButton menuItems={menuItems} icon={<MenuIcon />} />
      </div>
    </div>
  );
};

export default UserPanelHeader;
