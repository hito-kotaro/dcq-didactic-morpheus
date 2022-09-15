import React, { useState } from 'react';
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
    { name: 'Aさん', point: 8, team: 'A' },
    { name: 'Bさん', point: 9, team: 'A' },
    { name: 'Bさん', point: 10, team: 'A' },
    { name: 'Bさん', point: 1, team: 'A' },
    { name: 'Bさん', point: 8, team: 'A' },
    { name: 'Bさん', point: 8, team: 'A' },
    { name: 'Bさん', point: 8, team: 'A' },
    { name: 'Bさん', point: 18, team: 'A' },
    { name: 'Bさん', point: 6, team: 'A' },
    { name: 'Bさん', point: 10, team: 'B' },
    { name: 'Bさん', point: 4, team: 'B' },
    { name: 'Bさん', point: 1, team: 'B' },
    { name: 'Bさん', point: 0, team: 'B' },
    { name: 'Bさん', point: 6, team: 'B' },
    { name: 'Bさん', point: 8, team: 'B' },
    { name: 'Bさん', point: 6, team: 'B' },
    { name: 'Bさん', point: 6, team: 'B' },
    { name: 'Bさん', point: 6, team: 'B' },
    { name: 'Bさん', point: 6, team: 'B' },
  ];

  const teamData = [
    { name: 'teamA', point: 16, team: 'A' },
    { name: 'teamB', point: 26, team: 'B' },
  ];

  const toggleGraph = () => {
    setIsTeam(!isTeam);
  };

  const items: selectMenuType[] = [{ id: 1, label: 'test' }];

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
            data={isTeam ? teamData : userData}
            width={width}
            height={height}
          />
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
