import React from 'react';
import { TextField } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import TeamListTool from '../../mol/MainMenuTools/TeamListTool';

const TeamManagement = () => {
  const teamHandler = useInputForm();

  return (
    <SplitTemplate
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={
        <TeamListTool
          handler={teamHandler}
          onClick={() => console.log('new')}
        />
      }
      menuContents={<TeamList />}
      mainHeader={
        <div className="pt-7 h-1/6 text-center">
          <span className="text-2xl font-semibold">Team</span>のメンバー
        </div>
      }
      mainContents={<UserList users={users} />}
    />
  );
};

export default TeamManagement;
