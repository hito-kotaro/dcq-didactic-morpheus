import React, { ReactElement, VFC } from 'react';
import { Button } from '@mui/material';
import { inputHandlerType } from '../../../types/inputHandlerType';
import SearchWindow from '../../mol/SearchWindow/SearchWindow';
import UserCreate from './UserCreate';

type Props = {
  handler: inputHandlerType;
  onClickUserCreate: (c: ReactElement) => void;
};

const UserSearchWindow: VFC<Props> = (props) => {
  const { handler, onClickUserCreate } = props;
  return (
    <div className="w-full flex">
      <div className="w-4/6">
        <SearchWindow handler={handler} placeholder="ユーザ名で検索" />
      </div>
      <div className="w-1/6" />
      <div className="w-2/6 flex justify-end">
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickUserCreate(<UserCreate />)}
        >
          新規作成
        </Button>
      </div>
    </div>
  );
};

export default UserSearchWindow;
