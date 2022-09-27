import React, { ReactElement, VFC } from 'react';
import { Button, TextField } from '@mui/material';
import { inputHandlerType } from '../../../types/inputHandlerType';
import SearchWindow from '../../mol/SearchWindow/SearchWindow';
import UserCreate from './UserCreate';

type Props = {
  handler: inputHandlerType;
  onClickUserCreate: () => void;
};

const UserSearchWindow: VFC<Props> = (props) => {
  const { handler, onClickUserCreate } = props;
  return (
    <div className="flex">
      <div className="w-4/6">
        <TextField
          fullWidth
          type="text"
          placeholder="ユーザ名で検索"
          variant="outlined"
          onChange={handler.onChange}
          value={handler.value}
        />
      </div>
      <div className="ml-auto pt-2 text-right">
        <Button variant="contained" onClick={onClickUserCreate}>
          新規作成
        </Button>
      </div>
    </div>
  );
};

export default UserSearchWindow;
