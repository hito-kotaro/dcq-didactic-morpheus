import { useRecoilState } from 'recoil';
import { issueState } from './IssueStore/issueStore';
import { penaltyState } from './PenaltyStore/penaltyStore';
import { questState } from './QuestStore/questStore';
import { requestState } from './RequestStore/requestStore';
import { teamState } from './TeamStore/teamStore';
import { userState } from './UserStore/userStore';

const useGlobalState = () => {
  const [requests, setRequests] = useRecoilState(requestState);
  const [quests, setQuests] = useRecoilState(questState);
  const [users, setUsers] = useRecoilState(userState);
  const [teams, setTeams] = useRecoilState(teamState);
  const [penalties, setPenalties] = useRecoilState(penaltyState);
  const [issues, setIssues] = useRecoilState(issueState);

  return {
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
    issues,
    setIssues,
  };
};

export default useGlobalState;
