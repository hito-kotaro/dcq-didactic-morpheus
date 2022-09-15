import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import Summary from '../../components/org/Summary/Summary';

const HomeTemplate = () => {
  const dummy = () => {
    console.log('hello');
  };

  const itemList = [
    { label: '一般設定', icon: <InboxIcon />, action: dummy },
    { label: 'どりかむリスト', icon: <InboxIcon />, action: dummy },
    { label: 'ログアウト', icon: <InboxIcon />, action: dummy },
  ];

  return (
    <>
      <Header />
      <div className="flex h-screen py-10">
        <SideMenu itemList={itemList} />
        <div className="h-full w-full">
          <div className="h-5" />
          <Summary />
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
