import { TextField } from '@mui/material';
import React from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';

const TeamManagement = () => {
  const teamHandler = useInputForm();
  const teamData = [
    { name: 'teamA', point: 16, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
  ];

  return (
    <SplitTemplate
      menuTool={
        <TextField
          fullWidth
          type="text"
          label="チーム名で検索"
          variant="outlined"
          onChange={teamHandler.onChange}
          value={teamHandler.value}
        />
      }
      menuContents={<TeamList />}
    />
  );
};

export default TeamManagement;
