import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import { userDataType } from '../../../types/data/userDataType';

const useUserManagement = () => {
  const [user, setUser] = useState<userDataType>({
    id: 0,
    name: '',
    point: 0,
    team_id: 0,
    team: '',
    role_id: 0,
    role: '',
  });
  const userSearchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterd, setFilterd] = useState<userDataType[]>([]);

  const filterCheck = (data: userDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.name.indexOf(userSearchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.role_id === Number(selectHandler.value) &&
        data.name.indexOf(userSearchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filteringUser = (data: userDataType[]) => {
    setFilterd(data.filter((u: userDataType) => filterCheck(u)));
  };

  return {
    filterd,
    userSearchHandler,
    selectHandler,
    user,
    setUser,
    filteringUser,
  };
};

export default useUserManagement;
