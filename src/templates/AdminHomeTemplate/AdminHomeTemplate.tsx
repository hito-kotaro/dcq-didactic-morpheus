import React, { ReactElement, useEffect, VFC } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AdminHomeHeader from '../../components/mol/Headers/AdminHomeHeader';
import Header from '../../components/mol/Headers/Header';
import SideMenu from '../../components/org/SideMenu/SideMenu';
import useTeamApi from '../../hooks/Api/useTeamApi';

type Props = {
  settings: ReactElement[];
};

const AdminHomeTemplate: VFC<Props> = (props) => {
  const { settings } = props;
  const { fetchAllTeams } = useTeamApi();

  const dummy = (c: ReactElement) => {
    console.log('hello temmmmy');
  };

  useEffect(() => {
    fetchAllTeams();
  }, []);

  const itemList = [
    {
      label: '一般設定',
      icon: <InboxIcon />,
      action: dummy,
      component: <div>dummy</div>,
    },
    {
      label: 'どりかむリスト',
      icon: <InboxIcon />,
      action: dummy,
      component: <div>dummy</div>,
    },
  ];

  return (
    <>
      <Header />

      <div className="flex h-screen py-10">
        {/* side menu */}
        <SideMenu itemList={itemList} />
        {/* main panel */}
        <div className=" w-11/12 overflow-y-scroll">
          <div className="w-4/5 mx-auto">
            <div className="h-10" />
            <AdminHomeHeader />
            <div className="h-10" />
            <div className="rounded-lg border-1 py-3 px-3">
              {settings.map((setting: ReactElement) => setting)}
            </div>
          </div>
          <div className="h-10" />
        </div>
      </div>
    </>
  );
};

export default AdminHomeTemplate;
