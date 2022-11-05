import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useGlobalState from '../../../stores/useGlobalState';
import { teamDataType } from '../../../types/data/teamDataType';
import { listType } from '../List/listType';

const useTeamManagements = () => {
  const teamHandler = useInputForm();

  const [team, setTeam] = useState<teamDataType>({
    id: 0,
    name: '',
    member: 0,
    point: 0,
    penalty: 0,
  });

  const [filterdTeams, setFilterdTeams] = useState<listType[]>([]);
  const [isDetail, setIsDetail] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const { teams } = useGlobalState();

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const filteringTeam = (data: listType[]) => {
    setFilterdTeams(
      data.filter((t: listType) => {
        return t.title.indexOf(teamHandler.value) !== -1;
      }),
    );
  };

  const pickTeam = (id: number) => {
    const pick: teamDataType[] = teams.filter((t: teamDataType) => {
      return t.id === id;
    });

    return pick[0];
  };

  return {
    team,
    teamHandler,
    filterdTeams,
    setIsDetail,
    toggleCreate,
    filteringTeam,
    pickTeam,
  };
};

export default useTeamManagements;
