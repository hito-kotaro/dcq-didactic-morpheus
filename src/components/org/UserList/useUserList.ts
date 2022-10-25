import { useState } from 'react';
import useGlobalState from '../../../stores/useGlobalState';
import { userDataType } from '../../../types/data/userDataType';

const useUserList = () => {
  const { users } = useGlobalState();
  const [user, setUser] = useState<userDataType>({
    id: 0,
    name: '',
    point: 0,
    team: '',
    team_id: 0,
    role: '',
    role_id: 0,
  });

  // idを渡してユーザを返す
  const selectUser = (id: number) => {
    const filter: userDataType[] = users.filter((u: userDataType) => {
      return u.id === id;
    });
    const u: userDataType = filter[0];
    setUser(u);
    return u;
  };

  return { user, selectUser };
};

export default useUserList;
