import { useState } from 'react';
import { users } from '../../../testData/UserData';
import { userDataType } from '../../../types/data/userDataType';

const useUserList = () => {
  const [user, setUser] = useState<userDataType>({
    id: 0,
    name: '',
    point: 0,
    team: '',
    team_id: 0,
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
