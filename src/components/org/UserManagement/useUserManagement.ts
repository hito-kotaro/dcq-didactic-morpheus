import { ReactElement, useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useUserManagement = () => {
  const userSearchHandler = useInputForm();
  const userHandler = useInputForm();
  const pwdHandler = useInputForm();
  const rePwdHandler = useInputForm();
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [mainComponent, setMainComponent] = useState<ReactElement>();

  const roleSelectHandler = useSelectForm();
  const teamSelectHandler = useSelectForm();

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };
  const toggleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  const toggleDetail = () => {
    setIsDetail(!isDetail);
  };

  // const chMainComponent = (component: ReactElement) => {
  //   setMainComponent(component);
  // };

  const onClickCreate = (component: ReactElement) => {
    setMainComponent(component);
  };

  const onClickUpdate = () => {};

  const onClickUser = (component: ReactElement) => {
    // mainComponentを切り替える
    setMainComponent(component);
  };

  const wrapSetIsDetail = (d: boolean) => {
    setIsDetail(d);
  };

  return {
    isCreate,
    isUpdate,
    isDetail,
    userHandler,
    pwdHandler,
    rePwdHandler,
    userSearchHandler,
    roleSelectHandler,
    teamSelectHandler,
    mainComponent,
    setIsUpdate,
    wrapSetIsDetail,
    onClickCreate,
    onClickUpdate,
    onClickUser,
    toggleCreate,
    toggleUpdate,
    toggleDetail,
  };
};

export default useUserManagement;
