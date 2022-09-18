import React from 'react';
import { Divider, TextField } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import MyAvatar from '../../atoms/MyAvatar/MyAvatar';
import TeamListItem from '../../mol/TeamListItem/TeamListItem';

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
    <div className="flex w-full">
      <div className=" w-1/2 h-full">
        <div className="bg-red-200 top-10 z-50 sticky">
          <div className="p-3">
            <MyAvatar name="Kotaro" team="MyTeam" />
          </div>

          <div className="my-3">
            <Divider />
          </div>

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
        </div>

        <div className="bg-blue-200">
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

      <div className="bg-blue-100 w-1/2">
        <div className="fixed bg-red-100 h-full w-2/5 overflow-y-scroll">
          <div className="flex  bg-red-200">
            <MyAvatar name="Kotaro" team="MyTeam" />
            <div className="bg-green-100 ml-auto">
              <LightbulbIcon sx={{ fontSize: 40, color: '#5CD63D' }} />
              <div className="font-semibold text-text text-lg text-center">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
