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
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';

const TeamManagement = () => {
  const { teamHandler, filterdTeams, setIsDetail, filteringTeam } =
    useTeamManagements();
  const { convTeam, convUser, pickItem } = useList();
  const { fetchTenantMember } = useUserApi();
  const { teams, users } = useGlobalState();
  const { fetchTeamMember } = useUserApi();
  const { fetchAllTeams } = useTeamApi();
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();
  const [width, height] = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    fetchAllTeams();
    fetchTenantMember();
  }, []);

  useEffect(() => {
    filteringTeam(convTeam());
  }, [teams, teamHandler.value]);

  const wrapOnClickRequestItem = (r: requestDataType) => {
    mainContents.chComponent(<RequestDetail request={r} />);
    mainHeaderContents.chComponent(<RequestPanelHeader />);
  };

  const onClickUserItem = (id: number) => {
    const u = pickItem(id, users);
    if (width > 1000) {
      mainContents.chComponent(
        <UserDetail user={u} onClick={wrapOnClickRequestItem} />,
      );
      mainHeaderContents.chComponent(
        <UserPanelHeader
          user={u}
          chComponent={mainContents.chComponent}
          isDetail
        />,
      );
    } else {
      handleOpen();
      mainContents.chComponent(
        <UserDetail user={u} onClick={wrapOnClickRequestItem} />,
      );
    }
  };

  const wrapOnClickTeamListItem = async (id: number) => {
    // team idからteamを取得
    const clickedTeam: teamDataType[] = teams.filter((t: teamDataType) => {
      return t.id === id;
    });

    setIsDetail(true);
    const filterd: userDataType[] = await fetchTeamMember(id);
    console.log(filterd);
    // const filterd: userDataType[] = users.filter(
    //   (u: userDataType) => t.id === u.team_id,
    // );

    // コンポーネントを切り替え
    if (width > 1000) {
      mainContents.chComponent(
        <List list={convUser(filterd)} onClick={onClickUserItem} />,
        // <UserList users={filterd} onClick={onClickUserItem} />,
      );
      mainHeaderContents.chComponent(
        <TeamPanelHeader chComponent={mainContents.chComponent} />,
      );
    } else {
      handleOpen();
      mainContents.chComponent(
        <>
          <TeamPanelHeader chComponent={mainContents.chComponent} />
          <Divider />
          <List list={convUser(filterd)} onClick={onClickUserItem} />
        </>,
        // <UserList users={filterd} onClick={onClickUserItem} />,
      );
    }
  };

  const onClickTeamCreate = () => {
    if (width > 1000) {
      mainContents.chComponent(<TeamCreate />);
      mainHeaderContents.chComponent(
        <div className="text-center text-2xl font-semibold text-text">
          チーム新規作成
        </div>,
      );
    } else {
      handleOpen();
      mainContents.chComponent(<TeamCreate />);
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
          <List list={filterdTeams} onClick={wrapOnClickTeamListItem} />
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
