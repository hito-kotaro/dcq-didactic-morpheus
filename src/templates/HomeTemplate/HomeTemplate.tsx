import React from 'react';
import { Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import BarGraph from '../../components/org/BarGraph/BarGraph';
import SelectForm from '../../components/mol/SelectForm/SelectForm';
import { selectMenuType } from '../../components/mol/SelectForm/selectItemType';

const HomeTemplate = () => {
  const dummy = () => {
    console.log('hello');
  };

  const itemList = [
    { label: '一般設定', icon: <InboxIcon />, action: dummy },
    { label: 'どりかむリスト', icon: <InboxIcon />, action: dummy },
    { label: 'ログアウト', icon: <InboxIcon />, action: dummy },
  ];

  const data = [
    { name: 'Aさん', point: 800, team: 'A' },
    { name: 'Bさん', point: 967, team: 'A' },
    { name: 'Bさん', point: 10, team: 'A' },
    { name: 'Bさん', point: 100, team: 'A' },
    { name: 'Bさん', point: 108, team: 'A' },
    { name: 'Bさん', point: 680, team: 'A' },
    { name: 'Bさん', point: 680, team: 'A' },
    { name: 'Bさん', point: 680, team: 'A' },
    { name: 'Bさん', point: 680, team: 'A' },
    { name: 'Bさん', point: 680, team: 'B' },
    { name: 'Bさん', point: 680, team: 'B' },
    { name: 'Bさん', point: 680, team: 'B' },
    { name: 'Bさん', point: 680, team: 'B' },
    { name: 'Bさん', point: 680, team: 'B' },
    { name: 'Bさん', point: 680, team: 'B' },
    // { name: 'Bさん', point: 680, team: 'B' },
    // { name: 'Bさん', point: 680, team: 'B' },
    // { name: 'Bさん', point: 680, team: 'B' },
    // { name: 'Bさん', point: 680, team: 'B' },
  ];

  const items: selectMenuType[] = [{ id: 1, label: 'test' }];

  return (
    <>
      <Header />
      <div className="flex h-screen py-10">
        <SideMenu itemList={itemList} />
        <div className="h-full w-full">
          <div className="h-5" />
          <div className="flex px-3">
            <div className="w-1/3">
              <SelectForm menu={items} label="チームで絞り込み" />
            </div>
            <div className="ml-auto">
              <Button variant="contained">チーム毎の集計に切り替え</Button>
            </div>
          </div>

          <div className=" h-5/6 mt-5 overflow-x-scroll">
            <BarGraph data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
