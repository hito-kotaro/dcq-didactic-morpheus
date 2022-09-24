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
import CreateTeam from './CreateTeam';
import TeamPanelHeader from '../TeamPanelHeader/TeamPanelHeader';
import UpdateTeam from './UpdateTeam';
import useUserList from '../UserList/useUserList';
import useUserManagement from '../UserManagement/useUserManagement';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';

const TeamManagement = () => {
  const { onClickUser } = useUserManagement();
  const {
    isCreate,
    isUpdate,
    team,
    teamHandler,
    newNameHandler,
    newDescHandler,
    filterdUsers,
    filterdTeams,
    updNameHandler,
    updDescHandler,
    onClickTeamListItem,
    onClickCancel,
    onClickUpdate,
    onClickCreate,
    toggleCreate,
    toggleUpdate,
    filteringUser,
    filteringTeam,
    selectTeam,
  } = useTeamManagements();

  const { user, selectUser } = useUserList();
  const mainContents = useChangeComponent();
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
    mainContents.chComponent(<UserList users={filterd} onClick={selectUser} />);
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
          <div className="text-text text-lg font-semibold text-center border-b-1">
            チームを選択してください
          </div>
        )
      }
    />
  );
};

export default TeamManagement;
