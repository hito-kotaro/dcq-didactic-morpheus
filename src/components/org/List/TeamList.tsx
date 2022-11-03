import { Divider } from '@mui/material';
import React, { VFC } from 'react';
import { teamDataType } from '../../../types/data/teamDataType';
import TeamListItem from '../../atoms/ListItems/TeamListItem';

type Props = {
  teams: teamDataType[];
  onClick: (t: teamDataType) => void;
};

const TeamList: VFC<Props> = (props) => {
  const { teams, onClick } = props;
  return (
    <div className="">
      {teams.map((t: teamDataType) => (
        <div key={t.id}>
          <TeamListItem team={t} onClick={onClick} />
          <div className="my-3">
            <Divider />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
