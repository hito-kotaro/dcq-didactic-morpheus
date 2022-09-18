import React from 'react';
import { TextField } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';

const TeamManagement = () => {
  const teamHandler = useInputForm();

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
      mainHeader={<div className="pt-7 h-1/6">Team名 のメンバー</div>}
      mainContents={<UserList users={users} />}
    />
  );
};

export default TeamManagement;
