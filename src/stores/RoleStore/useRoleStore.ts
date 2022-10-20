import { useRecoilState } from 'recoil';
import { roleState } from './roleStore';

const useRoleStore = () => {
  const [roles, setRoles] = useRecoilState(roleState);

  return { roles, setRoles };
};

export default useRoleStore;
