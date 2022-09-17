import React from 'react';
import { Divider, TextField } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import MyAvatar from '../../atoms/MyAvatar/MyAvatar';
import TeamListItem from '../../mol/TeamListItem/TeamListItem';

const TeamManagement = () => {
  const teamHandler = useInputForm();
  const teamData = [
    { name: 'teamA', point: 16, penalty: 1, member: 1 },
    { name: 'teamB', point: 26, penalty: 1, member: 1 },
  ];

  return (
    <div className="flex w-full">
      <div className=" w-1/2">
        <div className="p-3">
          <MyAvatar name="Kotaro" team="MyTeam" />
        </div>
        <div className="my-3">
          <Divider />
        </div>
        <div>
          <div className="w-2/3 pl-3">
            <TextField
              fullWidth
              type="text"
              label="チーム名で検索"
              variant="outlined"
              onChange={teamHandler.onChange}
              value={teamHandler.value}
            />
          </div>

          <div className="my-3">
            <Divider />
          </div>

          <div>
            {teamData.map((t: any) => (
              <>
                <TeamListItem
                  name={t.name}
                  member={t.member}
                  point={t.point}
                  penalty={t.penalty}
                />
                <div className="my-3">
                  <Divider />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-blue-100 w-1/2">
        <div>mainPanelHeader</div>
        <div>mainPanelMenu</div>
      </div>
    </div>
  );
};

export default TeamManagement;
