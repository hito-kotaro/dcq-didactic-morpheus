import React, { useEffect } from 'react';

// componsents
import SplitTemplate from '../../templates/SplitTemplate';
import UserListTool from '../../mol/ListTools/UserListTool';
import UserPanelHeader from '../../mol/PanelHeaders/UserPanelHeader';
import UserDetail from '../../mol/Details/UserDetail';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import RequestDetail from '../../mol/Details/RequestDetail';
import UserSearchWindow from './UserSearchWindow';
import UserCreate from './UserCreate';
import useList from '../List/useList';
import List from '../List';
import ControlModal from '../../mol/ControlModal';

// custom hooks
import useGlobalState from '../../../stores/useGlobalState';
import useUserApi from '../../../hooks/Api/useUserApi';
import useRoleApi from '../../../hooks/Api/useRoleApi';
import useUserManagement from './useUserManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useModal from '../../atoms/MyModal/useMyModal';

// types
import type { requestDataType } from '../../../types/data/requestDataType';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

const UserManagement = () => {
  const {
    user,
    filterd,
    userSearchHandler,
    selectHandler,
    setUser,
    filteringUser,
  } = useUserManagement();
  const { isMobile } = useIsMobile();
  const { fetchAllRoles } = useRoleApi();
  const { convUser, pickItem } = useList();
  const { users } = useGlobalState();
  const { fetchTenantMember } = useUserApi();
  const mainContents = useChangeComponent();
  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    fetchTenantMember();
    fetchAllRoles();
  }, []);

  useEffect(() => {
    filteringUser(users);
  }, [users, userSearchHandler.value, selectHandler.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

  const onClickRequest = (r: requestDataType) => {
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  const onClickUser = (id: number) => {
    const u = pickItem(id, users);
    setUser(u);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <>
          <UserPanelHeader user={u} chComponent={mainContents.chComponent} />
          <UserDetail user={u} onClick={onClickRequest} />,
        </>,
      );
    } else {
      mainContents.chComponent(
        <UserDetail user={u} onClick={onClickRequest} />,
      );
    }
  };

  const onClickCreate = () => {
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(<UserCreate handleClose={handleClose} />);
    } else {
      mainContents.chComponent(<UserCreate />);
    }
  };

  // ------------------------------------ //
  //    END  wrap List Item click action  //
  // ------------------------------------ //

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
            onClickUserCreate={onClickCreate}
          />
        }
        // ここは、ロールでの絞り込みにする
        menuTool={<UserListTool handler={selectHandler} />}
        menuContents={<List list={convUser(filterd)} onClick={onClickUser} />}
        mainHeader={
          <UserPanelHeader
            user={user!}
            chComponent={mainContents.chComponent}
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
