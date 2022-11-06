import React, { useEffect } from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../List/UserList';
import UserListTool from '../../mol/ListTools/UserListTool';
import useUserManagement from './useUserManagement';
import UserPanelHeader from '../../mol/PanelHeaders/UserPanelHeader';
import useUserList from '../UserList/useUserList';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { userCreateHandlerType } from './types/userCreateHandler';
import { userDataType } from '../../../types/data/userDataType';
import UserDetail from '../../mol/Details/UserDetail';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestDetail from '../../mol/Details/RequestDetail';
import UserSearchWindow from './UserSearchWindow';
import UserCreate from './UserCreate';
import useUserApi from '../../../hooks/Api/useUserApi';
import useGlobalState from '../../../stores/useGlobalState';
import useList from '../List/useList';
import List from '../List';

const UserManagement = () => {
  const {
    isDetail,
    filterd,
    userSearchHandler,
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
    selectHandler,
    wrapSetIsDetail,
    filteringUser,
  } = useUserManagement();
  const { convUser, pickItem } = useList();
  const { user, selectUser } = useUserList();
  const { users, setUsers } = useGlobalState();
  const { fetchTenantMember } = useUserApi();
  const mainContents = useChangeComponent();

  const userCreateHandler: userCreateHandlerType = {
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
  };

  useEffect(() => {
    fetchTenantMember();
  }, []);

  useEffect(() => {
    filteringUser(users);
  }, [users, userSearchHandler.value, selectHandler.value]);

  const wrapOnClickRequestItem = (r: requestDataType) => {
    wrapSetIsDetail(true);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  const onClickUserList = (id: number) => {
    wrapSetIsDetail(true);
    mainContents.chComponent(
      <UserDetail
        user={pickItem(id, users)}
        onClick={wrapOnClickRequestItem}
      />,
    );
  };

  const wrapOnclickUserCreate = () => {
    mainContents.chComponent(<UserCreate />);
  };

  return (
    <SplitTemplate
      menuHeader={
        <UserSearchWindow
          handler={userSearchHandler}
          onClickUserCreate={wrapOnclickUserCreate}
        />
      }
      // ここは、ロールでの絞り込みにする
      menuTool={<UserListTool handler={selectHandler} />}
      menuContents={<List list={convUser(filterd)} onClick={onClickUserList} />}
      // menuContents={<UserList users={filterd} onClick={wrapSelectUser} />}
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
