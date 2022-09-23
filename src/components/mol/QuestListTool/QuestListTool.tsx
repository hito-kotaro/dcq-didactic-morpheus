import React, { VFC } from 'react';
import { TextField, Button } from '@mui/material';
import { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  handler: inputHandlerType;
  onClickCreate: () => void;
};

const QuestListTool: VFC<Props> = (props) => {
  const { handler, onClickCreate } = props;
  return (
    <div className="flex">
      <div className="w-4/6">
        <TextField
          fullWidth
          type="text"
          label="クエストタイトルで検索"
          variant="outlined"
          onChange={handler.onChange}
          value={handler.value}
        />
      </div>
      <div className="ml-auto pt-2 text-right">
        <Button variant="contained" onClick={onClickCreate}>
          新規作成
        </Button>
      </div>
    </div>
  );
};

export default QuestListTool;
