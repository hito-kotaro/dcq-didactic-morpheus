import { Divider } from '@mui/material';
import React from 'react';
import TeamListItem from '../TeamListItem/TeamListItem';

const TeamList = () => {
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
  );
};

export default TeamList;
