import { useRecoilState } from 'recoil';
import { userState } from './userStore';

const useUserStore = () => {
  const [users, setUsers] = useRecoilState(userState);

  return { users, setUsers };
};

export default useUserStore;
