import React from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();

  // ログイン時の画面遷移
  const login = (params: any) => {
    navigate('/home');
  };

  const signUp = (params: any) => {
    alert('signup');
    navigate('/home');
  };
  return { login, signUp };
};

export default useLogin;
