import React, { VFC } from 'react';
import { Button, TextField } from '@mui/material';
import { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  handler: inputHandlerType;
  onClickQuestCreate: () => void;
};

const QuestSearchWindow: VFC<Props> = (props) => {
  const { handler, onClickQuestCreate } = props;

  return (
    <div className="flex">
      <div className="w-4/6">
        <TextField
          fullWidth
          type="text"
          placeholder="クエストタイトルで検索"
          variant="outlined"
          onChange={handler.onChange}
          value={handler.value}
        />
      </div>
      <div className="ml-auto pt-2 text-right">
        <Button variant="contained" onClick={onClickQuestCreate}>
          新規作成
        </Button>
      </div>
    </div>
  );
};

export default QuestSearchWindow;
