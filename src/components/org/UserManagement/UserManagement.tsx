import React, { useEffect } from 'react';
import SplitTemplate from '../../templates/SplitTemplate';
import UserListTool from '../../mol/ListTools/UserListTool';
import useUserManagement from './useUserManagement';
import UserPanelHeader from '../../mol/PanelHeaders/UserPanelHeader';
import useUserList from '../UserList/useUserList';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { userCreateHandlerType } from './types/userCreateHandler';
import UserDetail from '../../mol/Details/UserDetail';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestDetail from '../../mol/Details/RequestDetail';
import UserSearchWindow from './UserSearchWindow';
import UserCreate from './UserCreate';
import useUserApi from '../../../hooks/Api/useUserApi';
import useRoleApi from '../../../hooks/Api/useRoleApi';
import useGlobalState from '../../../stores/useGlobalState';
import useList from '../List/useList';
import List from '../List';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import useModal from '../../atoms/MyModal/useMyModal';
import ControlModal from '../../mol/ControlModal';

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
  const { fetchAllRoles } = useRoleApi();
  const { convUser, pickItem } = useList();
  const { user, selectUser } = useUserList();
  const { users, setUsers } = useGlobalState();
  const { fetchTenantMember } = useUserApi();
  const mainContents = useChangeComponent();
  const [width, height] = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();

  const userCreateHandler: userCreateHandlerType = {
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
  };

  useEffect(() => {
    fetchTenantMember();
    fetchAllRoles();
  }, []);

  useEffect(() => {
    filteringUser(users);
  }, [users, userSearchHandler.value, selectHandler.value]);

  const wrapOnClickRequestItem = (r: requestDataType) => {
    wrapSetIsDetail(true);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  const onClickUserList = (id: number) => {
    const u = pickItem(id, users);
    wrapSetIsDetail(true);
    if (width > 1000) {
      mainContents.chComponent(
        <UserDetail user={u} onClick={wrapOnClickRequestItem} />,
      );
    } else {
      handleOpen();
      mainContents.chComponent(
        <>
          <UserPanelHeader
            user={user}
            chComponent={mainContents.chComponent}
            isDetail={isDetail}
          />
          <UserDetail user={u} onClick={wrapOnClickRequestItem} />,
        </>,
      );
    }
  };

  const wrapOnclickUserCreate = () => {
    if (width > 1000) {
      mainContents.chComponent(<UserCreate />);
    } else {
      handleOpen();
      mainContents.chComponent(<UserCreate handleClose={handleClose} />);
    }
  };

  return (
    <>
      <ControlModal
        open={open}
        handleClose={handleClose}
        content={mainContents.component ?? <div>no</div>}
      />

      <SplitTemplate
        menuHeader={
          <UserSearchWindow
            handler={userSearchHandler}
            onClickUserCreate={wrapOnclickUserCreate}
          />
        }
        // ここは、ロールでの絞り込みにする
        menuTool={<UserListTool handler={selectHandler} />}
        menuContents={
          <List list={convUser(filterd)} onClick={onClickUserList} />
        }
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
    </>
  );
};

export default UserManagement;
