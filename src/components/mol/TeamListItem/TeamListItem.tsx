import React, { VFC } from 'react';
import { Button } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Groups3Icon from '@mui/icons-material/Groups3';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ErrorIcon from '@mui/icons-material/Error';

// チーム名とかをPropsで渡す
type Props = {
  name: string;
  member: number;
  point: number;
  penalty: number;
};
const TeamListItem: VFC<Props> = (props) => {
  const { name, member, point, penalty } = props;
  return (
    <Button fullWidth>
      <div className="flex ml-3 w-full">
        <div className="w-1/5">
          <div className="h-10 w-10 bg-orange-300 rounded-md" />
        </div>
        <div className="w-2/5">
          <div className="text-text text-lg text-left">{name}</div>
          <div className="flex">
            <Groups3Icon
              color="primary"
              sx={{ fontSize: 40, color: '#6F7073' }}
            />
            <div className="w-2" />
            <div className="text-text text-lg leading-10">{member}</div>
          </div>
        </div>

        <div className="flex justify-around  w-2/5">
          <div>
            <LightbulbIcon sx={{ fontSize: 40, color: '#5CD63D' }} />
            <div className=" font-semibold text-text text-lg">{point}</div>
          </div>
          <div>
            <ErrorIcon sx={{ fontSize: 40, color: '#F47171' }} />
            <div className=" font-semibold text-text text-lg">{penalty}</div>
          </div>
          <div>
            <TipsAndUpdatesIcon sx={{ fontSize: 40, color: '#FBA305' }} />
            <div className="font-semibold text-text text-lg">
              {point - penalty}
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default TeamListItem;
