import { TextField, Button } from '@mui/material';
import React, { ReactElement, VFC } from 'react';
import { inputHandlerType } from '../../../types/inputHandlerType';
import { userCreateHandlerType } from './types/userCreateHandler';
import UserCreate from './UserCreate';

type Props = {
  handler: inputHandlerType;
  onClick: (component: ReactElement) => void;
  userCreateHandler: userCreateHandlerType;
  wrapSetIsDetail: (d: boolean) => void;
};

const UserListTool: VFC<Props> = (props) => {
  const { handler, onClick, userCreateHandler, wrapSetIsDetail } = props;
  const wrapOnClick = () => {
    wrapSetIsDetail(false);
    onClick(<UserCreate userCreateHandler={userCreateHandler} />);
  };

  return (
    <div className="flex">
      <div className="w-4/6">
        <TextField
          fullWidth
          type="text"
          label="ユーザ名で検索"
          variant="outlined"
          onChange={handler.onChange}
          value={handler.value}
        />
      </div>
      <div className="ml-auto pt-2 text-right">
        <Button variant="contained" onClick={wrapOnClick}>
          新規作成
        </Button>
      </div>
    </div>
  );
};

export default UserListTool;
