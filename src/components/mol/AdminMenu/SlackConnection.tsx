import { TextField, Button } from '@mui/material';
import React from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import AdminMenuTemplate from '../../templates/AdminMenuTemplate';

const SlackConnection = () => {
  const inputHandler = useInputForm();
  return (
    <AdminMenuTemplate title="slack連携">
      <>
        <div className="font-semibold">現在の連携先ID</div>
        <div className="text-text">*****</div>
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
      </>
    </AdminMenuTemplate>
  );
};

export default SlackConnection;
