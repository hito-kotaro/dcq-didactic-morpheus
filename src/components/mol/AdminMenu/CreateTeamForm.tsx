import { TextField, Button } from '@mui/material';
import React from 'react';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const CreateTeamForm = () => {
  const teamHandler = useInputForm();
  const { createTeam } = useTeamApi();
  const onClickCreate = () => {
    createTeam(teamHandler.value);
    teamHandler.clear();
  };
  return (
    <div className="flex">
      <div className="w-1/2">新しいチームを作成する</div>
      <div className="w-1/2">
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
      </div>
    </div>
  );
};

export default CreateTeamForm;
