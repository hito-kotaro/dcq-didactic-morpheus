import { Divider } from '@mui/material';
import React, { VFC } from 'react';
import { teamDataType } from '../../../types/data/teamDataType';
import TeamListItem from '../TeamListItem/TeamListItem';

type Props = {
  teams: teamDataType[];
  onClick: (id: number) => void;
};

const TeamList: VFC<Props> = (props) => {
  const { teams, onClick } = props;
  return (
    <div className="">
      {teams.map((t: teamDataType) => (
        <div key={t.id}>
          <TeamListItem
            id={t.id}
            name={t.name}
            member={t.member}
            point={t.point}
            penalty={t.penalty}
            onClick={onClick}
          />
          <div className="my-3">
            <Divider />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
