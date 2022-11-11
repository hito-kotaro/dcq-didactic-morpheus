import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import SplitTemplate from '../../templates/SplitTemplate';
import TeamListTool from '../../mol/ListTools/TeamListTool';
import useTeamManagements from './useTeamManagements';
import TeamPanelHeader from '../../mol/PanelHeaders/TeamPanelHeader';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import EmptyStateIcon from '../../atoms/EmptyStateIcon/EmptyStateIcon';
import UserDetail from '../../mol/Details/UserDetail';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestDetail from '../../mol/Details/RequestDetail';
import UserPanelHeader from '../../mol/PanelHeaders/UserPanelHeader';
import RequestPanelHeader from '../../mol/PanelHeaders/RequestPanelHeader';
import TeamCreate from './TeamCreate';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import useUserApi from '../../../hooks/Api/useUserApi';
import useGlobalState from '../../../stores/useGlobalState';
import List from '../List';
import useList from '../List/useList';
import ControlModal from '../../mol/ControlModal';
import useModal from '../../atoms/MyModal/useMyModal';
import useIsMobile from '../../../stores/IsMobileStore/useIsMobile';

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

  const onClickRequestItem = (r: requestDataType) => {
    mainContents.chComponent(<RequestDetail request={r} />);
    mainHeaderContents.chComponent(<RequestPanelHeader />);
  };

  const onClickUser = (id: number) => {
    const u = pickItem(id, users);
    if (isMobile) {
      handleOpen();
      mainContents.chComponent(
        <UserDetail user={u} onClick={onClickRequestItem} />,
      );
    } else {
      mainContents.chComponent(
        <UserDetail user={u} onClick={onClickRequestItem} />,
      );
      mainHeaderContents.chComponent(
        <UserPanelHeader
          user={u}
          chComponent={mainContents.chComponent}
          isDetail
        />,
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
