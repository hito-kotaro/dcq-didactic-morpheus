import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import { userCreateType } from '../../types/data/userDataType';

const useUserApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();

  const createUser = async (
    name: string,
    password: string,
    roleId: number,
    teamId: number,
  ) => {
    const userParams: userCreateType = {
      tenant_id: Number(localStorage.getItem('id')),
      role_id: roleId,
      team_id: teamId,
      name,
      password,
    };
    console.log(userParams);
    try {
      const result: AxiosResponse = await axiosTokenInstance.post(
        '/user/',
        userParams,
      );
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  return { createUser };
};

export default useUserApi;
