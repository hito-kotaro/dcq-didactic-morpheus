import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeTenantPassword from '../../components/mol/AdminMenu/ChangeTenantPassword';
import CreateUserForm from '../../components/mol/AdminMenu/CreateUserForm';
import SeasonSetting from '../../components/mol/AdminMenu/SeasonSetting';
import SlackConnection from '../../components/mol/AdminMenu/SlackConnection';
import AdminHomeTemplate from '../../templates/AdminHomeTemplate/AdminHomeTemplate';
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate';

const Home = () => {
  const navigate = useNavigate();
  const settings = [
    <>
      <ChangeTenantPassword />
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
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('admin'));

  return (
    <div>
      {localStorage.getItem('admin') ? (
        <AdminHomeTemplate settings={settings} />
      ) : (
        <HomeTemplate />
      )}
    </div>
  );
};
export default Home;
