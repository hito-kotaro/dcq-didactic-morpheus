import { TextField } from '@mui/material';
import React, { VFC } from 'react';
import { inputHandlerType } from '../../../types/inputHandlerType';

// タイトル検索
type Props = {
  inputHandler: inputHandlerType;
};

const RequestListTool: VFC<Props> = (props) => {
  const { inputHandler } = props;
  return (
    <div>
      <div className="w-full">
        <TextField
          fullWidth
          type="text"
          label="リクエストタイトルで検索"
          variant="outlined"
          onChange={inputHandler.onChange}
          value={inputHandler.value}
        />
      </div>
    </div>
  );
};

export default RequestListTool;