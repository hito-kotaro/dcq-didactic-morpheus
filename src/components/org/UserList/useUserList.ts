import { useState } from 'react';
import { userDataType } from '../../../types/data/userDataType';

const useUserList = () => {
  const [user, setUser] = useState<userDataType>({
    id: 0,
    name: '',
    point: 0,
    team: '',
    team_id: 0,
  });

  const selectUser = (u: userDataType) => {
    setUser(u);
  };

  return { user, selectUser };
};

export default useUserList;
