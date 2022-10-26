import { useRecoilState } from 'recoil';
import { penaltyState } from './PenaltyStore/penaltyStore';
import { questState } from './QuestStore/questStore';
import { requestState } from './RequestStore/requestStore';
import { roleState } from './RoleStore/roleStore';
import { teamState } from './TeamStore/teamStore';
import { userState } from './UserStore/userStore';

const useGlobalState = () => {
  const [roles, setRoles] = useRecoilState(roleState);
  const [requests, setRequests] = useRecoilState(requestState);
  const [quests, setQuests] = useRecoilState(questState);
  const [users, setUsers] = useRecoilState(userState);
  const [teams, setTeams] = useRecoilState(teamState);
  const [penalties, setPenalties] = useRecoilState(penaltyState);

  return {
    roles,
    setRoles,
    requests,
    setRequests,
    quests,
    setQuests,
    users,
    setUsers,
    teams,
    setTeams,
    penalties,
    setPenalties,
  };
};

export default useGlobalState;