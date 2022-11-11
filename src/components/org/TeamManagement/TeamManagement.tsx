import React, { useEffect } from 'react';
import { Divider } from '@mui/material';

// components
import SplitTemplate from '../../templates/SplitTemplate';
import TeamListTool from '../../mol/ListTools/TeamListTool';
import TeamPanelHeader from '../../mol/PanelHeaders/TeamPanelHeader';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import UserDetail from '../../mol/Details/UserDetail';
import RequestDetail from '../../mol/Details/RequestDetail';
import UserPanelHeader from '../../mol/PanelHeaders/UserPanelHeader';
import RequestPanelHeader from '../../mol/PanelHeaders/RequestPanelHeader';
import TeamCreate from './TeamCreate';
import List from '../List';
import ControlModal from '../../mol/ControlModal';

// custom hooks
import useTeamManagements from './useTeamManagements';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import useUserApi from '../../../hooks/Api/useUserApi';
import useGlobalState from '../../../stores/useGlobalState';
import useList from '../List/useList';
import useModal from '../../atoms/MyModal/useMyModal';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

// types
import type { userDataType } from '../../../types/data/userDataType';
import type { requestDataType } from '../../../types/data/requestDataType';

const TeamManagement = () => {
  const { teamHandler, filterdTeams, filteringTeam } = useTeamManagements();
  const { convTeam, convUser, pickItem } = useList();
  const { fetchTenantMember } = useUserApi();
  const { teams, users } = useGlobalState();
  const { fetchTeamMember } = useUserApi();
  const { fetchAllTeams } = useTeamApi();
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();
  const { isMobile } = useIsMobile();
  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    fetchAllTeams();
    fetchTenantMember();
  }, []);

  useEffect(() => {
    // 検索文字列が変わるたびにフィルタリング
    filteringTeam(convTeam());
  }, [teams, teamHandler.value]);

  // ------------------------------------ //
  //   START wrap List Item click action  //
  // ------------------------------------ //

  const onClickRequest = (r: requestDataType) => {
    mainContents.chComponent(<RequestDetail request={r} />);
    mainHeaderContents.chComponent(<RequestPanelHeader />);
  };

  const onClickUser = (id: number) => {
    const u = pickItem(id, users);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <UserDetail user={u} onClick={onClickRequest} />,
      );
    } else {
      mainContents.chComponent(
        <UserDetail user={u} onClick={onClickRequest} />,
      );
      mainHeaderContents.chComponent(
        <UserPanelHeader user={u} chComponent={mainContents.chComponent} />,
      );
    }
  };

  const onClickTeam = async (id: number) => {
    const filterd: userDataType[] = await fetchTeamMember(id);
    // コンポーネントを切り替え
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <>
          <TeamPanelHeader chComponent={mainContents.chComponent} />
          <Divider />
          <List list={convUser(filterd)} onClick={onClickUser} />
        </>,
      );
    } else {
      mainContents.chComponent(
        <List list={convUser(filterd)} onClick={onClickUser} />,
      );
      mainHeaderContents.chComponent(
        <TeamPanelHeader chComponent={mainContents.chComponent} />,
      );
    }
  };

  const onClickTeamCreate = () => {
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(<TeamCreate />);
    } else {
      mainContents.chComponent(<TeamCreate />);
      mainHeaderContents.chComponent(
        <div className="text-center text-2xl font-semibold text-text">
          チーム新規作成
        </div>,
      );
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
        // ここは固定
        menuHeader={
          <div className=" text-center text-2xl font-semibold text-text">
            チーム管理
          </div>
        }
        // 固定
        menuTool={
          <TeamListTool handler={teamHandler} onClick={onClickTeamCreate} />
        }
        // 固定
        menuContents={
          <List list={filterdTeams} onClick={onClickTeam} />
          // <TeamList teams={filterdTeams} onClick={wrapOnClickTeamListItem} />
        }
        // メインコンポーネントに付随して変更する
        mainHeader={
          mainHeaderContents.component ?? (
            <TeamPanelHeader chComponent={mainContents.chComponent} />
          )
        }
        // コンポーネントを切り替える
        mainContents={
          mainContents.component ?? (
            <EmptyStateIcon msg="チームを選択してください" />
          )
        }
      />
    </>
  );
};

export default TeamManagement;
