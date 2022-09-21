import React, { ReactElement, useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import Header from '../../components/org/Header/Header';
import UserManagement from '../../components/org/UserManagement/UserManagement';
import TeamManagement from '../../components/org/TeamManagement/TeamManagement';
import Summary from '../../components/org/Summary/Summary';

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
      label: 'ペナルティ',
      icon: <InboxIcon />,
      action: chComponent,
      component: <UserManagement />,
    },
    {
      label: 'リクエスト',
      icon: <InboxIcon />,
      action: chComponent,
      component: <UserManagement />,
    },
  ];

  return (
    <>
      <Header />
      <div className="flex h-screen pt-10">
        <SideMenu itemList={itemList} />
        {/* ここで表示するコンポーネントを切り替える。 */}
        <div className="w-full">{component}</div>
        {/* <UserManagement /> */}

        {/* <TeamManagement /> */}
      </div>
    </>
  );
};

export default HomeTemplate;
