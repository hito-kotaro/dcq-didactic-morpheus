import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../lib/axiosInstance';

const useLoginApi = () => {
  const navigate = useNavigate();

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
  return {};
};

export default useLoginApi;
