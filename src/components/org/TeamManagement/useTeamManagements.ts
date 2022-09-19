import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { teams } from '../../../testData/TeamData';
import { newTeamType, teamDataType } from '../../../types/data/teamDataType';
import { userDataType } from '../../../types/data/userDataType';

const useTeamManagements = () => {
  const teamHandler = useInputForm();
  const newNameHandler = useInputForm();
  const newDescHandler = useInputForm();
  const updNameHandler = useInputForm();
  const updDescHandler = useInputForm();

  const [team, setTeam] = useState<teamDataType>({
    id: 0,
    name: '',
    member: 0,
    point: 0,
    penalty: 0,
  });
  const [filterdUsers, setFilterdUsers] = useState<userDataType[]>([]);
  const [filterdTeams, setFilterdTeams] = useState<teamDataType[]>([]);
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const toggleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };
  const onClickCancel = () => {
    newNameHandler.clear();
    newDescHandler.clear();
    updNameHandler.clear();
    updDescHandler.clear();
    setIsCreate(false);
    setIsUpdate(false);
    // toggleCreate();
  };

  const onClickCreate = (newTeam: newTeamType) => {
    console.log(newTeam);
    newNameHandler.clear();
    newDescHandler.clear();
    toggleCreate();
  };

  const onClickUpdate = (newTeam: newTeamType) => {
    console.log(newTeam);
    updNameHandler.clear();
    updDescHandler.clear();
    toggleUpdate();
  };
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
    isCreate,
    isUpdate,
    filterdUsers,
    filterdTeams,
    team,
    teamHandler,
    newNameHandler,
    newDescHandler,
    updNameHandler,
    updDescHandler,
    onClickCancel,
    onClickCreate,
    onClickUpdate,
    toggleCreate,
    toggleUpdate,
    selectTeam,
    filteringUser,
    filteringTeam,
  };
};

export default useTeamManagements;
