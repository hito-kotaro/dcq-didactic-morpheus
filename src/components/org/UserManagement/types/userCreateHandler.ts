import {
  inputHandlerType,
  selectHandlerType,
} from '../../../../types/inputHandlerType';

export type userCreateHandlerType = {
  userHandler: inputHandlerType;
  pwdHandler: inputHandlerType;
  rePwdHandler: inputHandlerType;
  roleSelectHandler: selectHandlerType;
  teamSelectHandler: selectHandlerType;
};
