import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useGlobalState from '../../../stores/useGlobalState';
import { userDataType } from '../../../types/data/userDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useUserManagement = () => {
  const userSearchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const [isDetail, setIsDetail] = useState(false);
  const [filterd, setFilterd] = useState<userDataType[]>([]);
  const { users } = useGlobalState();
  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  const wrapSetIsDetail = (d: boolean) => {
    setIsDetail(d);
  };

  const filterCheck = (data: userDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      console.log('all');
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

  const pickUser = (id: number): userDataType => {
    const pick = users.filter((u: userDataType) => u.id === id);
    return pick[0];
  };

  return {
    isDetail,
    filterd,
    userSearchHandler,
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
    selectHandler,
    pickUser,
    wrapSetIsDetail,
    filteringUser,
  };
};

export default useUserManagement;
