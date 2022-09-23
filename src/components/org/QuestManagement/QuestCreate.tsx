import { Button, Divider, TextField } from '@mui/material';
import React from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const QuestCreate = () => {
  const titleHandler = useInputForm();
  const rwdHandler = useInputForm();
  const descHandler = useInputForm();
  const exampleHandler = useInputForm();

  return (
    <div className="px-3 text-text">
      <div>
        <TextField
          fullWidth
          type="text"
          label="クエストタイトル"
          variant="outlined"
          onChange={titleHandler.onChange}
          value={titleHandler.value}
        />
      </div>
      <div className="h-3" />
      <div className="flex">
        <div className="w-2/6">
          <TextField
            fullWidth
            type="text"
            // label="新しいチームの説明(任意)"
            label="どりかむポイント"
            variant="outlined"
            onChange={rwdHandler.onChange}
            value={rwdHandler.value}
            // multiline
            // maxRows={5}
            // minRows={5}
          />
        </div>
        <div className="ml-auto">
          <Button variant="contained">クエスト発行</Button>
        </div>
      </div>
      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
        // label="新しいチームの説明(任意)"
        label="クエスト内容"
        variant="outlined"
        onChange={descHandler.onChange}
        value={descHandler.value}
        multiline
        maxRows={5}
        minRows={5}
      />

      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
        // label="新しいチームの説明(任意)"
        label="報告内容サンプル"
        variant="outlined"
        onChange={exampleHandler.onChange}
        value={exampleHandler.value}
        multiline
        maxRows={5}
        minRows={5}
      />
    </div>
  );
};

export default QuestCreate;
