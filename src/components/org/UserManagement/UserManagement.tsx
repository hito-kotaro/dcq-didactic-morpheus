import React from 'react';
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
import UserDetail from './UserDetail';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestDetail from '../RequestManagement/RequestDetail';
import UserSearchWindow from './UserSearchWindow';

const UserManagement = () => {
  const {
    isDetail,
    userSearchHandler,
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
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

  const wrapOnClickRequestItem = (r: requestDataType) => {
    wrapSetIsDetail(true);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  const wrapSelectUser = (u: userDataType) => {
    wrapSetIsDetail(true);
    mainContents.chComponent(
      <UserDetail user={u} onClick={wrapOnClickRequestItem} />,
    );
  };

  return (
    <SplitTemplate
      menuHeader={
        <UserSearchWindow
          handler={userSearchHandler}
          onClickUserCreate={mainContents.chComponent}
        />
      }
      // ここは、ロールでの絞り込みにする
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
          user={user}
          chComponent={mainContents.chComponent}
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
