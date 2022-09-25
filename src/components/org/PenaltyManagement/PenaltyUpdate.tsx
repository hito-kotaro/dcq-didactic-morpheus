import { TextField, Button, Divider } from '@mui/material';
import React, { VFC } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { penaltyDataType } from '../../../types/data/penaltyDataType';

type Props = {
  penalty: penaltyDataType;
};

const PenaltyUpdate: VFC<Props> = (props) => {
  const { penalty } = props;
  const titleHandler = useInputForm(penalty.title);
  const penaltyHandler = useInputForm(String(penalty.penalty));
  const descHandler = useInputForm(penalty.description);

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
            // label="新しいチームの説明(任意)"
            label="ペナルティポイント"
            variant="outlined"
            onChange={penaltyHandler.onChange}
            value={penaltyHandler.value}
            // multiline
            // maxRows={5}
            // minRows={5}
          />
        </div>
        <div className="ml-auto">
          <Button variant="contained">ペナルティ更新</Button>
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
    </div>
  );
};

export default PenaltyUpdate;
