import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useTeamStore from '../../stores/TeamStore/useTeamStore';
import { teamDataType } from '../../types/data/teamDataType';

const useTeamApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setTeams } = useTeamStore();

  // テナント内のチームを取得
  const fetchAllTeams = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/team');
      const teamList: teamDataType[] = result.data.teams;
      setTeams(teamList);
    } catch {
      alert('画面を更新してください');
    }
  };

  const createTeam = async (team: string) => {
    const createParam = { tenant_id: localStorage.getItem('id'), name: team };
    try {
      const result: AxiosResponse = await axiosTokenInstance.post(
        `/team`,
        createParam,
      );
      fetchAllTeams();
      console.log(result.data);
    } catch {
      alert('画面を更新してください');
    }
  };

  return { createTeam, fetchAllTeams };
};

export default useTeamApi;
