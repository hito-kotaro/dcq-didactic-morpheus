import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';
import SelectForm from '../../mol/SelectForm/SelectForm';
import BarGraph from '../BarGraph/BarGraph';
import useBarGraph from '../BarGraph/useBarGraph';
import useUserStore from '../../../stores/UserStore/useUserStore';
import useTeamStore from '../../../stores/TeamStore/useTeamStore';
import useTeamApi from '../../../hooks/Api/useTeamApi';
import useUserApi from '../../../hooks/Api/useUserApi';

const Summary = () => {
  const { selectHandler, setFilterdUserData, filteringData, filterdUserData } =
    useBarGraph();
  const { users } = useUserStore();
  const { teams } = useTeamStore();
  const { fetchTenantMember } = useUserApi();
  const { fetchAllTeams } = useTeamApi();
  const [isTeam, setIsTeam] = useState(false);
  const [width, height] = useWindowSize();

  const toggleGraph = () => {
    setIsTeam(!isTeam);
  };

  useEffect(() => {
    setFilterdUserData(users);
    fetchAllTeams();
    fetchTenantMember();
  }, []);

  useEffect(() => {
    selectHandler.formatSelectItem(teams);
  }, [teams]);

  useEffect(() => {
    filteringData(users);
  }, [selectHandler.value]);

  return (
    <>
      <div className="flex w-full px-3 mt-10">
        {isTeam ? (
          ''
        ) : (
          <div className="w-1/3">
            <SelectForm
              menu={[{ id: 0, label: 'all' }, ...selectHandler.selectItem]}
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
      <div className="h-5/6 overflow-y-scroll">
        <BarGraph
          data={isTeam ? teams : filterdUserData}
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default Summary;
