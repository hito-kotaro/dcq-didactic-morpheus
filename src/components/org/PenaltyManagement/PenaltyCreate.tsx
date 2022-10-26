import React from 'react';
import { TextField, Button, Divider } from '@mui/material';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { penaltyRequestType } from '../../../types/data/penaltyDataType';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';

const PenaltyCreate = () => {
  const titleHandler = useInputForm();
  const penaltyHandler = useInputForm();
  const descHandler = useInputForm();
  const { createPenalty } = usePenaltyApi();

  const onClickCreate = () => {
    const createParams: penaltyRequestType = {
      title: titleHandler.value,
      description: descHandler.value,
      penalty: Number(penaltyHandler.value),
    };

    createPenalty(createParams);

    titleHandler.clear();
    descHandler.clear();
    penaltyHandler.clear();
  };

  return (
    <div className="px-3 text-text">
      <div>
        <TextField
          fullWidth
          type="text"
          label="ペナルティタイトル"
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
            label="ペナルティポイント"
            variant="outlined"
            onChange={penaltyHandler.onChange}
            value={penaltyHandler.value}
          />
        </div>
        <div className="ml-auto">
          <Button variant="contained" onClick={onClickCreate}>
            ペナルティ発行
          </Button>
        </div>
      </div>
      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
        label="ペナルティ内容"
        variant="outlined"
        onChange={descHandler.onChange}
        value={descHandler.value}
        multiline
        maxRows={5}
        minRows={5}
      />
    </div>
  );
};

export default PenaltyCreate;
