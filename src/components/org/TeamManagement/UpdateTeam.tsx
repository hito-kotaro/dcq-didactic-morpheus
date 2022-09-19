import React, { VFC } from 'react';
import { TextField, Divider, Button } from '@mui/material';
import { newTeamType } from '../../../types/data/teamDataType';
import { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  nameHandler: inputHandlerType;
  descHandler: inputHandlerType;
  onClickUpdate: (newTeam: newTeamType) => void;
  onClickCancel: () => void;
};

const UpdateTeam: VFC<Props> = (props) => {
  const { nameHandler, descHandler, onClickUpdate, onClickCancel } = props;

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
            onClickUpdate({
              name: nameHandler.value,
              description: descHandler.value,
            })
          }
        >
          更新
        </Button>
      </div>
    </div>
  );
};

export default UpdateTeam;
