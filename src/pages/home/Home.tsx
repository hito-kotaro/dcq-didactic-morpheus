import React from 'react';
import AdminPage from '../admin/AdminPage';
import UserPage from '../user/UserPage';

const Home = () => {
  return (
    <div>{localStorage.getItem('admin') ? <AdminPage /> : <UserPage />}</div>
  );
};
export default Home;
