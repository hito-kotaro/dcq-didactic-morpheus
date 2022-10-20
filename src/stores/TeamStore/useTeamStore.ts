import { useRecoilState } from 'recoil';
import { teamState } from './teamStore';

const useTeamStore = () => {
  const [teams, setTeams] = useRecoilState(teamState);

  return { teams, setTeams };
};

export default useTeamStore;
