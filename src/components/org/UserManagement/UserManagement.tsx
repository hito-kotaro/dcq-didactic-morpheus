import React from 'react';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import UserListTool from './UserListTool';
import useUserManagement from './useUserManagement';
import UserPanelHeader from './UserPanelHeader';
import useUserList from '../UserList/useUserList';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';

const UserManagement = () => {
  const {
    isCreate,
    isUpdate,
    userSearchHandler,
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
    onClickCreate,
    toggleCreate,
    toggleUpdate,
  } = useUserManagement();

  const { user, selectUser } = useUserList();
  return (
    <SplitTemplate
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={
        <UserListTool handler={userSearchHandler} onClick={onClickCreate} />
      }
      menuContents={<UserList users={users} onClick={selectUser} />}
      mainHeader={
        <UserPanelHeader
          headerMsg=""
          user={user}
          toggleUpdate={toggleUpdate}
          isCreate={isCreate}
          isUpdate={isUpdate}
        />
      }
      mainContents={
        isCreate ? (
          <UserCreate
            userHandler={userHandler}
            pwdHandler={pwdHandler}
            rePwdHandler={rePwdHandler}
            roleSelectHandler={roleSelectHandler}
            teamSelectHandler={teamSelectHandler}
          />
        ) : isUpdate ? (
          <UserUpdate />
        ) : (
          <div>ユーザー情報とか新しいユーザー作成フォームとか</div>
        )
      }
    />
  );
};

export default UserManagement;
