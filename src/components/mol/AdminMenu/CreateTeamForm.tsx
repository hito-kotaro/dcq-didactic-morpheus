import React from 'react';
import { TextField, Button } from '@mui/material';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import AdminMenuTemplate from '../../templates/AdminMenuTemplate';

const CreateTeamForm = () => {
  const teamHandler = useInputForm();
  const { createTeam } = useTeamApi();
  const onClickCreate = () => {
    createTeam(teamHandler.value);
    teamHandler.clear();
  };
  return (
    <AdminMenuTemplate title="新しいチームを作成する">
      <>
        <TextField
          fullWidth
          type="text"
          label="チーム名入力"
          variant="outlined"
          onChange={teamHandler.onChange}
          value={teamHandler.value}
        />

        <div className="h-3" />
        <Button variant="contained" onClick={onClickCreate}>
          新しいチームを作成
        </Button>
      </>
    </AdminMenuTemplate>
  );
};

export default CreateTeamForm;
