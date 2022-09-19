import { Button, Divider, TextField } from '@mui/material';
import React, { VFC } from 'react';
import { newTeamType } from '../../../types/data/teamDataType';
import { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  nameHandler: inputHandlerType;
  descHandler: inputHandlerType;
  onClickCreate: (newTeam: newTeamType) => void;
  onClickCancel: () => void;
};

const CreateTeam: VFC<Props> = (props) => {
  const { nameHandler, descHandler, onClickCreate, onClickCancel } = props;
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
        <Button variant="contained" color="inherit" onClick={onClickCancel}>
          キャンセル
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            onClickCreate({
              name: nameHandler.value,
              description: descHandler.value,
            })
          }
        >
          チーム作成
        </Button>
      </div>
    </div>
  );
};

export default CreateTeam;
