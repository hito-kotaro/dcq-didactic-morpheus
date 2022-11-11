import { useState } from 'react';
import useChangeComponent from '../../../hooks/ChangeComponent/useChangeComponent';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useGlobalState from '../../../stores/useGlobalState';
import { teamDataType } from '../../../types/data/teamDataType';
import { listType } from '../List/listType';

const useTeamManagements = () => {
  const teamHandler = useInputForm();
  const [filterdTeams, setFilterdTeams] = useState<listType[]>([]);
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
    teamHandler,
    filterdTeams,
    toggleCreate,
    filteringTeam,
    pickTeam,
  };
};

export default useTeamManagements;
