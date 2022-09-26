import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
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

  const [filterdTeams, setFilterdTeams] = useState<teamDataType[]>([]);
  const [isDetail, setIsDetail] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const filteringTeam = (data: teamDataType[]) => {
    setFilterdTeams(
      data.filter((t: teamDataType) => {
        return t.name.indexOf(teamHandler.value) !== -1;
      }),
    );
  };

  return {
    team,
    teamHandler,
    filterdTeams,
    setIsDetail,
    toggleCreate,
    filteringTeam,
  };
};

export default useTeamManagements;
