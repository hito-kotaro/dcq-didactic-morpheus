import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { teams } from '../../../testData/TeamData';
import { teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';

const useTeamManagements = () => {
  const teamHandler = useInputForm();
  const [team, setTeam] = useState<teamDataType>({
    id: 0,
    name: '',
    member: 0,
    point: 0,
    penalty: 0,
  });
  const [filterdUsers, setFilterdUsers] = useState<userDataType[]>([]);
  const [filterdTeams, setFilterdTeams] = useState<teamDataType[]>([]);

  const filteringUser = (data: userDataType[]) => {
    setFilterdUsers(
      data.filter((u: userDataType) => {
        return u.team_id === team.id;
      }),
    );
  };

  const filteringTeam = (data: teamDataType[]) => {
    setFilterdTeams(
      data.filter((t: teamDataType) => {
        console.log(t.name.indexOf(teamHandler.value));
        return t.name.indexOf(teamHandler.value) !== -1;
      }),
    );
  };

  const selectTeam = (id: number) => {
    const filter: teamDataType[] = teams.filter((t: teamDataType) => {
      return t.id === id;
    });
    setTeam(filter[0]);
  };

  return {
    filterdUsers,
    filterdTeams,
    team,
    teamHandler,
    selectTeam,
    filteringUser,
    filteringTeam,
  };
};

export default useTeamManagements;
