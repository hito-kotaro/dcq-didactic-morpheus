import React, { ReactElement, useState } from 'react';

// components
import HistoryIcon from '@mui/icons-material/History';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/mol/Headers/Header';
import UserManagement from '../../components/org/Managements/UserManagement/UserManagement';
import TeamManagement from '../../components/org/Managements/TeamManagement/TeamManagement';
import Summary from '../../components/org/Summary/Summary';
import QuestManagement from '../../components/org/Managements/QuestManagement/QuestManagement';
import RequestManagement from '../../components/org/Managements/RequestManagement/RequestManagement';
import PenaltyManagement from '../../components/org/Managements/PenaltyManagement/PenaltyManagement';
import RequestHistoryManagement from '../../components/org/Managements/RequestHistoryManagement/RequestHistoryManagement';
import PenaltyHistoryManagement from '../../components/org/Managements/PenaltyHistoryManagement/PenaltyHistoryManagement';
import DashBoard from '../../components/org/DashBoard/DashBoard';

// custom hooks
import useSidemenuState from '../../stores/SideMenuStore/useSidemenuState';

// types
import { sideMenuDataType } from '../../components/org/SideMenu/sideMenuDataType';

const HomeTemplate = () => {
  const [component, setComponent] = useState<ReactElement>(<DashBoard />);
  const { toggle } = useSidemenuState();

  const chComponent = (c: ReactElement) => {
    toggle();
    setComponent(c);
  };

  const sideMenuItemList: sideMenuDataType[] = [
    {
      label: 'ダッシュボード',
      icon: <DashboardIcon />,
      action: chComponent,
      component: <DashBoard />,
    },
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
      label: 'クエスト管理',
      icon: <AssignmentTurnedInIcon />,
      action: chComponent,
      component: <QuestManagement />,
    },
    {
      label: 'リクエスト',
      icon: <ReviewsIcon />,
      action: chComponent,
      component: <RequestManagement />,
    },
    {
      label: 'ペナルティ',
      icon: <AnnouncementIcon />,
      action: chComponent,
      component: <PenaltyManagement />,
    },
    {
      label: 'リクエスト履歴',
      icon: <HistoryIcon />,
      action: chComponent,
      component: <RequestHistoryManagement />,
    },
    {
      label: 'ペナルティ履歴',
      icon: <HistoryIcon />,
      action: chComponent,
      component: <PenaltyHistoryManagement />,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex h-screen pt-10">
        <SideMenu itemList={sideMenuItemList} />
        <div className="w-full">{component}</div>
      </div>
    </>
  );
};

export default HomeTemplate;
