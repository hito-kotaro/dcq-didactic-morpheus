import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../lib/axiosInstance';

const useLoginApi = () => {
  const navigate = useNavigate();

  // ログイン時の画面遷移

  const login = async (
    tenantName: string,
    userName: string,
    password: string,
  ) => {
    const authParam = {
      tenant_name: tenantName,
      user_name: userName,
      password,
    };

    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/auth/user/login',
        authParam,
      );

      console.log(result.data.access_token);

      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('tenant_name', result.data.tenant);
      localStorage.setItem('user', result.data.user);
      localStorage.setItem('user_id', result.data.user_id);
      // localStorage.setItem('token', result.data.access_token);
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };

  const tenantLogin = async (tenantName: string, password: string) => {
    const loginParam = { tenant_name: tenantName, password };
    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/auth/tenant/login',
        loginParam,
      );
      console.log(result.data);
      localStorage.setItem('tenant_id', result.data.tenant_id);
      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('name', result.data.tenant);
      localStorage.setItem('tenant_name', result.data.tenant);
      localStorage.setItem('admin', '1');
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };

  const signUp = async (tenantName: string, password: string) => {
    const signUpParam = { name: tenantName, password };
    try {
      const result: AxiosResponse = await axiosInstance.post(
        '/auth/signup',
        signUpParam,
      );
      console.log(result.data);
      localStorage.setItem('token', result.data.access_token);
      localStorage.setItem('tenant_name', result.data.tenant);
      localStorage.setItem('admin', '1');
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };
  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.removeItem('tenant_namr');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user');
    navigate('/');
  };
  return { login, logout, tenantLogin, signUp };
};

export default useLoginApi;
