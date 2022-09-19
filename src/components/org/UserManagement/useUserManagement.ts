import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useUserManagement = () => {
  const userSearchHandler = useInputForm();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };
  const toggleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  const onClickCreate = () => {
    toggleCreate();
  };

  return {
    isCreate,
    isUpdate,
    userHandler,
    pwdHandler,
    rePwdHandler,
    userSearchHandler,
    roleSelectHandler,
    teamSelectHandler,
    onClickCreate,
    toggleCreate,
    toggleUpdate,
  };
};

export default useUserManagement;
