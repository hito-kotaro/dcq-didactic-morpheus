import React, { ReactElement } from 'react';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import UserListTool from './UserListTool';
import useUserManagement from './useUserManagement';
import UserPanelHeader from './UserPanelHeader';
import useUserList from '../UserList/useUserList';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { userCreateHandlerType } from './types/userCreateHandler';
import { userDataType } from '../../../types/data/userDataType';
import UserUpdate from './UserUpdate';
import UserDetail from './UserDetail';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';

const UserManagement = () => {
  const {
    isDetail,
    userSearchHandler,
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
    toggleUpdate,
    wrapSetIsDetail,
  } = useUserManagement();

  const { user, selectUser } = useUserList();
  const mainContents = useChangeComponent();

  const userCreateHandler: userCreateHandlerType = {
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
  };

  const wrapSelectUser = (id: number) => {
    const u: userDataType = selectUser(id);
    wrapSetIsDetail(true);
    mainContents.chComponent(<UserDetail user={u} />);
  };

  return (
    <SplitTemplate
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={
        <UserListTool
          handler={userSearchHandler}
          onClick={mainContents.chComponent}
          userCreateHandler={userCreateHandler}
          wrapSetIsDetail={wrapSetIsDetail}
        />
      }
      menuContents={<UserList users={users} onClick={wrapSelectUser} />}
      mainHeader={
        <UserPanelHeader
          headerMsg=""
          user={user}
          toggleUpdate={toggleUpdate}
          chComponent={mainContents.chComponent}
          mainComponent={mainContents.component ?? <div>n</div>}
          isDetail={isDetail}
        />
      }
      mainContents={
        mainContents.component ?? (
          <EmptyStateIcon msg="ユーザを選択してください" />
        )
      }
    />
  );
};

export default UserManagement;
