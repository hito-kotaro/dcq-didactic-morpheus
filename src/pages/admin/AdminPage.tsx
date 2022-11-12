import React from 'react';
import { Divider } from '@mui/material';
import ChangeTenantPassword from '../../components/mol/AdminMenu/ChangeTenantPassword';
import CreateTeamForm from '../../components/mol/AdminMenu/CreateTeamForm';
import CreateUserForm from '../../components/mol/AdminMenu/CreateUserForm';
import SeasonSetting from '../../components/mol/AdminMenu/SeasonSetting';
import SlackConnection from '../../components/mol/AdminMenu/SlackConnection';
import AdminHomeTemplate from '../../templates/AdminHomeTemplate/AdminHomeTemplate';

const AdminPage = () => {
  const settings = [
    <>
      <ChangeTenantPassword />
      <div className="my-5">
        <Divider />
      </div>
    </>,
    <>
      <CreateTeamForm />
      <div className="my-5">
        <Divider />
      </div>
    </>,
    <>
      <CreateUserForm />
      <div className="my-5">
        <Divider />
      </div>
    </>,
    <>
      <SeasonSetting />
      <div className="my-5">
        <Divider />
      </div>
    </>,
    <>
      <SlackConnection />
      <div className="my-5">
        <Divider />
      </div>
    </>,
  ];

  return <AdminHomeTemplate settings={settings} />;
};

export default AdminPage;
