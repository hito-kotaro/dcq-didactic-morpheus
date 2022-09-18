import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import Summary from '../../components/org/Summary/Summary';
import TeamManagement from '../../components/org/TeamManagement/TeamManagement';
import MyAvatar from '../../components/atoms/MyAvatar/MyAvatar';

const HomeTemplate = () => {
  const dummy = () => {
    console.log('hello');
  };

  const itemList = [
    { label: '集計', icon: <InboxIcon />, action: dummy },
    { label: 'チーム/ユーザー管理', icon: <InboxIcon />, action: dummy },
    { label: 'クエストボード', icon: <InboxIcon />, action: dummy },
    { label: 'ペナルティ', icon: <InboxIcon />, action: dummy },
    { label: 'リクエスト', icon: <InboxIcon />, action: dummy },
  ];

  return (
    <>
      <Header />
      <div className="flex h-screen pt-10">
        <SideMenu itemList={itemList} />
        <div className="w-full h-full ">
          <div className="flex w-full h-full ">
            <div className=" w-1/2 bg-red-200 h-full">
              <div className=" pt-7 px-3 bg-green-500 h-1/6">
                <MyAvatar name="KOTARO" team="team" />
              </div>
              <div className="h-5/6 bg-blue-500">MenuContents</div>
            </div>
            <div className=" w-1/2 bg-green-200 h-full">test</div>
          </div>
          {/* <TeamManagement /> */}
          {/* <Summary /> */}
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
