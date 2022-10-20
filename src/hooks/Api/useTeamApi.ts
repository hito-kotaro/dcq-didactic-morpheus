import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useTeamStore from '../../stores/TeamStore/useTeamStore';
import { teamDataType } from '../../types/data/teamDataType';

const useTeamApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setTeams } = useTeamStore();

  const fetchAllTeams = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/team');
      const teamList: teamDataType[] = result.data.teams;
      setTeams(teamList);
    } catch {
      alert('画面を更新してください');
    }
  };

  return { fetchAllTeams };
};

export default useTeamApi;
