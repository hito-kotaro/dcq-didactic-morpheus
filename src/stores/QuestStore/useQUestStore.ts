import { useRecoilState } from 'recoil';
import { questState } from './questStore';

const useQUestStore = () => {
  const [quests, setQuests] = useRecoilState(questState);
  return { quests, setQuests };
};

export default useQUestStore;
