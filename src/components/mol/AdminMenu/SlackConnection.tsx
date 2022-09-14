import { TextField, Button } from '@mui/material';
import React from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const SlackConnection = () => {
  const inputHandler = useInputForm();
  return (
    <div className="flex">
      <div className="w-1/2">Slack連携設定</div>
      <div className="w-1/2">
        <div className="font-semibold">現在の連携先ID</div>
        <div className="text-text">
          kokoniSlacknotyannneruaidexi-gahhairimasu
        </div>
        <div className="h-2" />
        <TextField
          fullWidth
          type="text"
          label="SlackチャンネルID"
          variant="outlined"
          onChange={inputHandler.onChange}
          value={inputHandler.value}
        />
        <div className="h-2" />
        <Button variant="contained">更新</Button>
      </div>
    </div>
  );
};

export default SlackConnection;
