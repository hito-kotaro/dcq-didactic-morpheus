import React, { ReactElement, useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import UserManagement from '../../components/org/UserManagement/UserManagement';
import TeamManagement from '../../components/org/TeamManagement/TeamManagement';
import Summary from '../../components/org/Summary/Summary';
import QuestManagement from '../../components/org/QuestManagement/QuestManagement';
import RequestManagement from '../../components/org/RequestManagement/RequestManagement';

const HomeTemplate = () => {
  const [component, setComponent] = useState<ReactElement>(<Summary />);
  const dummy = () => {
    console.log('hello');
  };

  const chComponent = (c: ReactElement) => {
    setComponent(c);
  };

  const itemList = [
    {
      label: '集計',
      icon: <InboxIcon />,
      action: chComponent,
      component: <Summary />,
    },
    {
      label: 'チーム管理',
      icon: <InboxIcon />,
      action: chComponent,
      component: <TeamManagement />,
    },
    {
      label: 'ユーザ管理',
      icon: <InboxIcon />,
      action: chComponent,
      component: <UserManagement />,
    },
    {
      label: 'クエスト管理',
      icon: <InboxIcon />,
      action: chComponent,
      component: <QuestManagement />,
    },
    {
      label: 'リクエスト',
      icon: <InboxIcon />,
      action: chComponent,
      component: <RequestManagement />,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex h-screen pt-10">
        <SideMenu itemList={itemList} />
        <div className="w-full">{component}</div>
      </div>
    </>
  );
};

export default HomeTemplate;
