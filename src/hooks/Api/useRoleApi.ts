import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useGlobalState from '../../stores/useGlobalState';
import { roleDataType } from '../../types/data/roleDataType';

const useRoleApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setRoles } = useGlobalState();

  const fetchAllRoles = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/role');
      const roleList: roleDataType[] = result.data.roles;
      setRoles(roleList);
    } catch (e) {
      console.log(e);
    }
  };
  return { fetchAllRoles };
};

export default useRoleApi;
