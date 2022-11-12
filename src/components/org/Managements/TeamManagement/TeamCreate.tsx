import React from 'react';
import { TextField, Divider, Button } from '@mui/material';
import useInputForm from '../../../../hooks/InputForm/useInputForm';

const TeamCreate = () => {
  const nameHandler = useInputForm();
  const descHandler = useInputForm();

  const onClickCreate = () => {};

  return (
    <div className="px-3">
      <TextField
        fullWidth
        type="text"
        label="新しいチーム名"
        variant="outlined"
        onChange={nameHandler.onChange}
        value={nameHandler.value}
      />

      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
        label="新しいチームの説明(任意)"
        variant="outlined"
        onChange={descHandler.onChange}
        value={descHandler.value}
        multiline
        maxRows={10}
        minRows={10}
      />

      <div className="my-5">
        <Divider />
      </div>

      <div className="flex justify-around">
        <Button variant="contained" onClick={onClickCreate}>
          チーム作成
        </Button>
      </div>
    </div>
  );
};

export default TeamCreate;
