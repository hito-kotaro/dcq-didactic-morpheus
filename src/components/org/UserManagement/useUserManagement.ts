import { ReactElement, useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useUserManagement = () => {
  const userSearchHandler = useInputForm();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const [isDetail, setIsDetail] = useState(false);

  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  const wrapSetIsDetail = (d: boolean) => {
    setIsDetail(d);
  };

  return {
    isDetail,
    userSearchHandler,
    userHandler,
    pwdHandler,
    rePwdHandler,
    roleSelectHandler,
    teamSelectHandler,
    wrapSetIsDetail,
  };
};

export default useUserManagement;
