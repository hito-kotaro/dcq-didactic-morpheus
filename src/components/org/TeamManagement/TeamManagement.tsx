import React, { useEffect } from 'react';
import TeamList from '../List/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../List/UserList';
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

const TeamManagement = () => {
  const { team, teamHandler, filterdTeams, setIsDetail, filteringTeam } =
    useTeamManagements();

  const { teams } = useGlobalState();
  const { fetchTeamMember } = useUserApi();
  const { fetchAllTeams } = useTeamApi();
  const mainContents = useChangeComponent();
  const mainHeaderContents = useChangeComponent();

  useEffect(() => {
    fetchAllTeams();
  }, []);

  useEffect(() => {
    filteringTeam(teams);
  }, [teams, teamHandler.value]);

  const wrapOnClickRequestItem = (r: requestDataType) => {
    mainContents.chComponent(<RequestDetail request={r} />);
    mainHeaderContents.chComponent(<RequestPanelHeader />);
  };

  const onClickUserItem = (u: userDataType) => {
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
  };

  const wrapOnClickTeamListItem = async (t: teamDataType) => {
    // 詳細表示になったことを保持
    setIsDetail(true);
    // 対象のチームメンバを取得
    // クリックしたチームのUser情報を取得
    const filterd: userDataType[] = await fetchTeamMember(t.id);

    // const filterd: userDataType[] = users.filter(
    //   (u: userDataType) => t.id === u.team_id,
    // );

    // コンポーネントを切り替え
    mainContents.chComponent(
      <UserList users={filterd} onClick={onClickUserItem} />,
    );
    mainHeaderContents.chComponent(
      <TeamPanelHeader team={t} chComponent={mainContents.chComponent} />,
    );
  };

  const onClickTeamCreate = () => {
    mainContents.chComponent(<TeamCreate />);
    mainHeaderContents.chComponent(
      <div className="text-center text-2xl font-semibold text-text">
        チーム新規作成
      </div>,
    );
  };

  return (
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
        <TeamList teams={filterdTeams} onClick={wrapOnClickTeamListItem} />
      }
      // メインコンポーネントに付随して変更する
      mainHeader={
        mainHeaderContents.component ?? (
          <TeamPanelHeader team={team} chComponent={mainContents.chComponent} />
        )
      }
      // コンポーネントを切り替える
      mainContents={
        mainContents.component ?? (
          <EmptyStateIcon msg="チームを選択してください" />
        )
      }
    />
  );
};

export default TeamManagement;
