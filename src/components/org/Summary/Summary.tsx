import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import SelectForm from '../../mol/SelectForm/SelectForm';
import { selectItemType } from '../../mol/SelectForm/selectItemType';
import BarGraph from '../BarGraph/BarGraph';
import useBarGraph from '../BarGraph/useBarGraph';
import { users } from '../../../testData/UserData';
import { teams } from '../../../testData/TeamData';

const Summary = () => {
  const { selectHandler, setFilterdUserData, filteringData, filterdUserData } =
    useBarGraph();
  const [isTeam, setIsTeam] = useState(false);
  const [width, height] = useWindowSize();

  const toggleGraph = () => {
    setIsTeam(!isTeam);
  };

  const items: selectItemType[] = [
    { id: 0, label: '全てのユーザを表示' },
    { id: 1, label: 'Team1' },
    { id: 2, label: 'Team2' },
  ];

  useEffect(() => {
    console.log(selectHandler.value);
    setFilterdUserData(users);
  }, []);

  useEffect(() => {
    filteringData(users);
  }, [selectHandler.value]);

  return (
    <>
      <div className="flex  w-full mt-10">
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
        data={isTeam ? teams : filterdUserData}
        width={width}
        height={height}
      />
    </>
  );
};

export default Summary;
