import React, { ReactElement, useEffect, useState, VFC } from 'react';

// MUI iconst
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/MoveToInbox';

// componetnts
import AdminSettingsTemplate from './AdminSettingsTemplate';
import AdminHomeHeader from '../../components/mol/Headers/AdminHomeHeader';
import Header from '../../components/mol/Headers/Header';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import UserManagement from '../../components/org/Managements/UserManagement/UserManagement';

// hooks
import useSidemenuState from '../../stores/SideMenuStore/useSidemenuState';
import useTeamApi from '../../hooks/Api/useTeamApi';

type Props = {
  settings: ReactElement[];
};

const AdminHomeTemplate: VFC<Props> = (props) => {
  const { settings } = props;
  const [component, setComponent] = useState<ReactElement>(
    <AdminSettingsTemplate settings={settings} />,
  );
  const { toggle } = useSidemenuState();
  const { fetchAllTeams } = useTeamApi();

  useEffect(() => {
    fetchAllTeams();
  }, []);

  const chComponent = (c: ReactElement) => {
    toggle();
    setComponent(c);
  };

  const itemList = [
    {
      label: '一般設定',
      icon: <InboxIcon />,
      action: chComponent,
      // 設定を全て表示
      component: <AdminSettingsTemplate settings={settings} />,
    },
    {
      label: 'ユーザ管理',
      icon: <PersonIcon />,
      action: chComponent,
      component: <UserManagement />,
    },
    {
      label: 'どりかむリスト',
      icon: <InboxIcon />,
      action: chComponent,
      component: <div>dummy</div>,
    },
  ];

  return (
    <>
      <Header />
      <SideMenu itemList={itemList} />

      <div className="h-screen py-20 px-3">
        <div className="h-10" />
        <AdminHomeHeader />
        {component}
        <div className="h-10" />
      </div>
    </>
  );
};

export default AdminHomeTemplate;
