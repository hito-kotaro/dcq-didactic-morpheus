import React, { useEffect } from 'react';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import TeamListTool from '../../mol/MainMenuTools/TeamListTool';
import useTeamManagements from './useTeamManagements';
import TeamPanelHeader from '../TeamPanelHeader/TeamPanelHeader';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import UserDetail from '../UserManagement/UserDetail';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestDetail from '../RequestManagement/RequestDetail';
import UserPanelHeader from '../UserManagement/UserPanelHeader';
import RequestPanelHeader from '../RequestManagement/RequestPanelHeader';
import TeamCreate from './TeamCreate';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import useTeamStore from '../../../stores/TeamStore/useTeamStore';

const TeamManagement = () => {
  const { team, teamHandler, filterdTeams, setIsDetail, filteringTeam } =
    useTeamManagements();

  const { teams } = useTeamStore();

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

  const wrapOnClickTeamListItem = (t: teamDataType) => {
    // 詳細表示になったことを保持
    setIsDetail(true);
    // 対象のチームメンバを取得
    const filterd: userDataType[] = users.filter(
      (u: userDataType) => t.id === u.team_id,
    );

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
