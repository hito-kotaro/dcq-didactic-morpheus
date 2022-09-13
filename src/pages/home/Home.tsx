import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHomeTemplate from '../../templates/AdminHomeTemplate/AdminHomeTemplate';
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate';

const Home = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  return <div>{isAdmin ? <AdminHomeTemplate /> : <AdminHomeTemplate />}</div>;
};
export default Home;
