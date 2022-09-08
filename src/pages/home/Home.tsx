import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button type="button" onClick={() => navigate('/')}>
        toLogin
      </button>
    </>
  );
};
export default Home;
