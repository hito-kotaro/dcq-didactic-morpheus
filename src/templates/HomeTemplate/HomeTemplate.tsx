import React, { ReactElement, useState } from 'react';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
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
      icon: <EqualizerIcon />,
      action: chComponent,
      component: <Summary />,
    },
    {
      label: 'チーム管理',
      icon: <GroupsIcon />,
      action: chComponent,
      component: <TeamManagement />,
    },
    {
      label: 'ユーザ管理',
      icon: <PersonIcon />,
      action: chComponent,
      component: <UserManagement />,
    },
    {
      label: 'クエスト管理',
      icon: <AssignmentTurnedInIcon />,
      action: chComponent,
      component: <QuestManagement />,
    },
    {
      label: 'リクエスト',
      icon: <AnnouncementIcon />,
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
