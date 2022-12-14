import { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../lib/axiosInstance';

const useLogin = () => {
  const navigate = useNavigate();

  // ログイン時の画面遷移

  const login = async (
    tenantName: string,
    userName: string,
    password: string,
  ) => {
    const authParam = {
      tenantName,
      userName,
      password,
    };

    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/auth/user/login',
        authParam,
      );

      console.log(result);
      navigate('/home');
      // localStorage.setItem('token', result.data.access_token);
    } catch (e) {
      console.log(e);
    }
  };

  const signUp = async (tenantName: string, password: string) => {
    const signUpParam = { tenant_name: tenantName, password };
    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/tenant',
        signUpParam,
      );

      console.log(result);
      // navigate('/home');
      // localStorage.setItem('token', result.data.access_token);
    } catch (e) {
      console.log(e);
    }
  };
  return { login, signUp };
};

export default useLogin;
