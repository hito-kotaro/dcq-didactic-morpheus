/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import { teams } from '../../../testData/TeamData';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import TeamListTool from '../../mol/MainMenuTools/TeamListTool';
import useTeamManagements from './useTeamManagements';
import TeamPanelHeader from '../TeamPanelHeader/TeamPanelHeader';
import useUserList from '../UserList/useUserList';
import useUserManagement from '../UserManagement/useUserManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';
import EmptyStateIcon from '../../mol/EmptyStateIcon/EmptyStateIcon';
import UserDetail from '../UserManagement/UserDetail';
import { requestDataType } from '../../../types/data/requestDataType';
import RequestDetail from '../RequestManagement/RequestDetail';

const TeamManagement = () => {
  const {
    team,
    teamHandler,
    filterdTeams,
    onClickTeamListItem,
    toggleCreate,
    filteringUser,
    filteringTeam,
  } = useTeamManagements();

  const { user, selectUser } = useUserList();

  const mainContents = useChangeComponent();

  const wrapOnClickRequestItem = (r: requestDataType) => {
    // wrapSetIsDetail(true);
    mainContents.chComponent(<RequestDetail request={r} />);
  };

  const onClickUserItem = (u: userDataType) => {
    mainContents.chComponent(
      <UserDetail user={u} onClick={wrapOnClickRequestItem} />,
    );
  };

  useEffect(() => {
    filteringUser(users);
  }, [team]);

  useEffect(() => {
    filteringTeam(teams);
  }, [teamHandler.value]);

  const wrapOnClickTeamListItem = (t: teamDataType) => {
    onClickTeamListItem(t);
    const filterd: userDataType[] = users.filter(
      (u: userDataType) => t.id === u.team_id,
    );
    mainContents.chComponent(
      <UserList users={filterd} onClick={onClickUserItem} />,
    );
  };

  return (
    <SplitTemplate
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={<TeamListTool handler={teamHandler} onClick={toggleCreate} />}
      menuContents={
        <TeamList teams={filterdTeams} onClick={wrapOnClickTeamListItem} />
      }
      mainHeader={
        <TeamPanelHeader team={team} chComponent={mainContents.chComponent} />
      }
      mainContents={
        mainContents.component ?? (
          <EmptyStateIcon msg="チームを選択してください" />
        )
      }
    />
  );
};

export default TeamManagement;
