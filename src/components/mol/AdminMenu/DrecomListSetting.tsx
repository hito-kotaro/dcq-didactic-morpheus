import React from 'react';
import { Button, TextField } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const DrecomListSetting = () => {
  const labelHandler = useInputForm();
  const pointHandler = useInputForm();
  return (
    <div className="flex">
      <div className="w-1/2">どりかむリストを作成</div>
      <div className="w-1/2">
        <div className="flex">
          <div className="w-8/12">
            <TextField
              fullWidth
              type="text"
              label="タイトル"
              variant="outlined"
              onChange={labelHandler.onChange}
              value={labelHandler.value}
            />
          </div>
          <div className="w-4/12">
            <TextField
              fullWidth
              type="text"
              label="ポイント"
              variant="outlined"
              onChange={pointHandler.onChange}
              value={pointHandler.value}
            />
          </div>
        </div>

        <Button variant="contained">追加</Button>
      </div>
    </div>
  );
};

export default DrecomListSetting;
