import React, { useEffect } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import { teams } from '../../../testData/TeamData';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import TeamListTool from '../../mol/MainMenuTools/TeamListTool';
import useTeamManagements from './useTeamManagements';

const TeamManagement = () => {
  const {
    team,
    teamHandler,
    filterdUsers,
    filterdTeams,
    filteringUser,
    filteringTeam,
    selectTeam,
  } = useTeamManagements();

  useEffect(() => {
    filteringUser(users);
  }, [team]);

  useEffect(() => {
    filteringTeam(teams);
  }, [teamHandler.value]);

  return (
    <SplitTemplate
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={
        <TeamListTool
          handler={teamHandler}
          onClick={() => console.log('new')}
        />
      }
      menuContents={<TeamList teams={filterdTeams} onClick={selectTeam} />}
      mainHeader={
        <div className="pt-7 h-1/6 text-center">
          <span className="text-2xl font-semibold">{team.name}</span>のメンバー
        </div>
      }
      mainContents={<UserList users={filterdUsers} />}
    />
  );
};

export default TeamManagement;
