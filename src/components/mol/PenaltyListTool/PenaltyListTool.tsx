import { TextField, Button } from '@mui/material';
import React, { VFC } from 'react';
import { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  handler: inputHandlerType;
  onClick: () => void;
};
const PenaltyListTool: VFC<Props> = (props) => {
  const { handler, onClick } = props;
  return (
    <div className="flex">
      <div className="w-4/6">
        <TextField
          fullWidth
          type="text"
          placeholder="ペナルティタイトルで検索"
          variant="outlined"
          onChange={handler.onChange}
          value={handler.value}
        />
      </div>
      <div className="ml-auto pt-2 text-right">
        <Button variant="contained" onClick={onClick}>
          新規作成
        </Button>
      </div>
    </div>
  );
};

export default PenaltyListTool;
