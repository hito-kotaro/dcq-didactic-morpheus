import { ReactElement, useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
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

  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  const wrapSetIsDetail = (d: boolean) => {
    setIsDetail(d);
  };

  const convertRole = (val: number) => {
    let status = '';

    if (val === 1) {
      status = 'mamber';
    } else if (val === 2) {
      status = 'leader';
    } else if (val === 3) {
      status = 'master';
    } else if (val === 0) {
      status = 'all';
    } else {
      status = '';
    }
    return status;
  };

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
        console.log(data.role_id);
        console.log(selectHandler.value);
        flg = true;
      }
    }
    console.log(flg);
    return flg;
  };

  const filteringUser = (data: userDataType[]) => {
    setFilterd(data.filter((u: userDataType) => filterCheck(u)));
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
    wrapSetIsDetail,
    filteringUser,
  };
};

export default useUserManagement;
