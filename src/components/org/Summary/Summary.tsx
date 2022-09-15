import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import SelectForm from '../../mol/SelectForm/SelectForm';
import { selectMenuType } from '../../mol/SelectForm/selectItemType';
import BarGraph from '../BarGraph/BarGraph';
import useBarGraph from '../BarGraph/useBarGraph';

const Summary = () => {
  const { selectHandler, setFilterdUserData, filteringData, filterdUserData } =
    useBarGraph();
  const [isTeam, setIsTeam] = useState(false);
  const [width, height] = useWindowSize();

  const userData = [
    { name: 'Aさん', point: 8, team_id: 1 },
    { name: 'Bさん', point: 9, team_id: 1 },
    { name: 'Bさん', point: 10, team_id: 1 },
    { name: 'Bさん', point: 1, team_id: 1 },
    { name: 'Bさん', point: 8, team_id: 1 },
    { name: 'Bさん', point: 8, team_id: 1 },
    { name: 'Bさん', point: 8, team_id: 1 },
    { name: 'Bさん', point: 18, team_id: 1 },
    { name: 'Bさん', point: 6, team_id: 1 },
    { name: 'Bさん', point: 10, team_id: 2 },
    { name: 'Bさん', point: 4, team_id: 2 },
    { name: 'Bさん', point: 1, team_id: 2 },
    { name: 'Bさん', point: 0, team_id: 2 },
    { name: 'Bさん', point: 6, team_id: 2 },
    { name: 'Bさん', point: 8, team_id: 2 },
    { name: 'Bさん', point: 6, team_id: 2 },
    { name: 'Bさん', point: 6, team_id: 2 },
    { name: 'Bさん', point: 6, team_id: 2 },
    { name: 'Bさん', point: 6, team_id: 2 },
  ];

  const teamData = [
    { name: 'teamA', point: 16, team_id: 1 },
    { name: 'teamB', point: 26, team_id: 2 },
  ];

  const toggleGraph = () => {
    setIsTeam(!isTeam);
  };

  const items: selectMenuType[] = [
    { id: 0, label: '全てのユーザを表示' },
    { id: 1, label: 'Team1' },
    { id: 2, label: 'Team2' },
  ];

  useEffect(() => {
    console.log(selectHandler.value);
    setFilterdUserData(userData);
  }, []);

  useEffect(() => {
    filteringData(userData);
  }, [selectHandler.value]);

  return (
    <>
      <div className="flex px-3">
        {isTeam ? (
          ''
        ) : (
          <div className="w-1/3">
            <SelectForm
              menu={items}
              label="チームで絞り込み"
              handler={selectHandler}
            />
          </div>
        )}

        <div className="ml-auto">
          <Button variant="contained" onClick={toggleGraph}>
            {isTeam ? 'ユーザ毎の集計に切り替え' : 'チーム毎の集計に切り替え'}
          </Button>
        </div>
      </div>
      <BarGraph
        data={isTeam ? teamData : filterdUserData}
        width={width}
        height={height}
      />
    </>
  );
};

export default Summary;
