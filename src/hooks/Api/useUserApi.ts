import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useGlobalState from '../../stores/useGlobalState';
import { userCreateType } from '../../types/data/userDataType';

const useUserApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setUsers } = useGlobalState();

  // テナント内のユーザを全て取得する
  const fetchTenantMember = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/user');
      setUsers(result.data.users);
    } catch (e) {
      console.log(e);
    }
  };

  // 特定のチームに所属するユーザを取得する。
  const fetchTeamMember = async (teamId: number) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get(
        `/user/member/${teamId}`,
      );
      return result.data.users;
    } catch (e) {
      console.log(e);
    }
  };

  const createUser = async (name: string, password: string, teamId: number) => {
    const userParams: userCreateType = {
      tenant_id: Number(localStorage.getItem('id')),
      team_id: teamId,
      name,
      password,
    };
    try {
      await axiosTokenInstance.post('/user/', userParams);
      fetchTenantMember();
    } catch (e) {
      console.log(e);
    }
  };

  return { createUser, fetchTeamMember, fetchTenantMember };
};

export default useUserApi;
