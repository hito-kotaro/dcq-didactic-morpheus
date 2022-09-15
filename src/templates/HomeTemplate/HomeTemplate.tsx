import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import BarGraph from '../../components/org/BarGraph/BarGraph';
import SelectForm from '../../components/mol/SelectForm/SelectForm';
import { selectMenuType } from '../../components/mol/SelectForm/selectItemType';
import useWindowSize from '../../hooks/WindowSize/useWindowSize';
import useSelectForm from '../../components/mol/SelectForm/useSelectForm';

const HomeTemplate = () => {
  const selectHandler = useSelectForm();
  const [filterdUserData, setFilterdUserData] = useState([
    { name: 'Aさん', point: 8, team_id: 1 },
  ]);
  const [isTeam, setIsTeam] = useState(false);
  const [width, height] = useWindowSize();
  const dummy = () => {
    console.log('hello');
  };

  const itemList = [
    { label: '一般設定', icon: <InboxIcon />, action: dummy },
    { label: 'どりかむリスト', icon: <InboxIcon />, action: dummy },
    { label: 'ログアウト', icon: <InboxIcon />, action: dummy },
  ];

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
    if (Number(selectHandler.value) === 0) {
      // filterしない
      setFilterdUserData(userData);
    } else {
      const tmp = userData.filter((u: any) => {
        return u.team_id === selectHandler.value;
      });
      setFilterdUserData(tmp);
    }
  }, [selectHandler.value]);

  useEffect(() => {
    setFilterdUserData(userData);
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-screen py-10">
        <SideMenu itemList={itemList} />
        <div className="h-full w-full">
          <div className="h-5" />
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
                {isTeam
                  ? 'ユーザ毎の集計に切り替え'
                  : 'チーム毎の集計に切り替え'}
              </Button>
            </div>
          </div>
          <BarGraph
            data={isTeam ? teamData : filterdUserData}
            width={width}
            height={height}
          />
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
