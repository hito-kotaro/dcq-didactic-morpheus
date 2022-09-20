/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import TeamList from '../../mol/TeamList/TeamList';
import SplitTemplate from '../../templates/SplitTemplate';
import UserList from '../UserList/UserList';
import { users } from '../../../testData/UserData';
import { teams } from '../../../testData/TeamData';
import UserInfo from '../../mol/MenuHeader/UserInfo';
import TeamListTool from '../../mol/MainMenuTools/TeamListTool';
import useTeamManagements from './useTeamManagements';
import CreateTeam from './CreateTeam';
import TeamPanelHeader from '../TeamPanelHeader/TeamPanelHeader';
import UpdateTeam from './UpdateTeam';
import useUserList from '../UserList/useUserList';
import useUserManagement from '../UserManagement/useUserManagement';

const TeamManagement = () => {
  const { onClickUser } = useUserManagement();
  const {
    isCreate,
    isUpdate,
    team,
    teamHandler,
    newNameHandler,
    newDescHandler,
    filterdUsers,
    filterdTeams,
    updNameHandler,
    updDescHandler,
    onClickCancel,
    onClickUpdate,
    onClickCreate,
    toggleCreate,
    toggleUpdate,
    filteringUser,
    filteringTeam,
    selectTeam,
  } = useTeamManagements();

  const { user, selectUser } = useUserList();

  useEffect(() => {
    filteringUser(users);
  }, [team]);

  useEffect(() => {
    filteringTeam(teams);
  }, [teamHandler.value]);

  return (
    <SplitTemplate
      menuHeader={<UserInfo name="KOTARO" team="TeamA" score={10} />}
      menuTool={<TeamListTool handler={teamHandler} onClick={toggleCreate} />}
      menuContents={<TeamList teams={filterdTeams} onClick={selectTeam} />}
      mainHeader={
        <div className="pt-7 h-1/6 text-center">
          {isCreate ? (
            <span className="text-2xl font-semibold pt-5">
              新しいチームを作る
            </span>
          ) : (
            <TeamPanelHeader
              isUpdate={isUpdate}
              team={team}
              toggleUpdate={toggleUpdate}
            />
          )}
        </div>
      }
      mainContents={
        isCreate ? (
          <CreateTeam
            nameHandler={newNameHandler}
            descHandler={newDescHandler}
            onClickCancel={onClickCancel}
            onClickCreate={onClickCreate}
          />
        ) : isUpdate ? (
          <UpdateTeam
            nameHandler={updNameHandler}
            descHandler={updDescHandler}
            onClickUpdate={onClickUpdate}
            onClickCancel={onClickCancel}
          />
        ) : (
          // 型エラーが出ないようにとりあえずonClickUserを入れている。
          // チーム管理画面でユーザボタンをクリックした時にどのような動きをするか未定。
          // 決まり次第適切な関数を入れてあげる
          <UserList users={filterdUsers} onClick={selectUser} />
        )
      }
    />
  );
};

export default TeamManagement;
