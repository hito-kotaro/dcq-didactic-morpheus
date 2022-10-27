import { TextField, Button, Divider } from '@mui/material';
import React, { ReactElement, VFC } from 'react';
import usePenaltyApi from '../../../hooks/Api/usePenaltyApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import {
  penaltyDataType,
  penaltyRequestType,
} from '../../../types/data/penaltyDataType';
import PenaltyDetail from './PenaltyDetail';

type Props = {
  penalty: penaltyDataType;
  chComponent?: (e: ReactElement) => void;
};

const PenaltyUpdate: VFC<Props> = (props) => {
  const { penalty, chComponent } = props;
  const { updatePenalty } = usePenaltyApi();
  const titleHandler = useInputForm(penalty.title);
  const penaltyHandler = useInputForm(String(penalty.penalty));
  const descHandler = useInputForm(penalty.description);

  const onClickUpdate = async () => {
    const createParam: penaltyRequestType = {
      title: titleHandler.value,
      description: descHandler.value,
      point: Number(penaltyHandler.value),
    };
    const result: penaltyDataType = await updatePenalty(
      penalty.id,
      createParam,
    );

    titleHandler.clear();
    penaltyHandler.clear();
    descHandler.clear();

    if (chComponent) {
      console.log('ch');
      chComponent(<PenaltyDetail penalty={result} />);
    }
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
            // label="新しいチームの説明(任意)"
            label="ペナルティポイント"
            variant="outlined"
            onChange={penaltyHandler.onChange}
            value={penaltyHandler.value}
          />
        </div>
        <div className="ml-auto">
          <Button variant="contained" onClick={onClickUpdate}>
            ペナルティ更新
          </Button>
        </div>
      </div>
      <div className="my-5">
        <Divider />
      </div>

      <TextField
        fullWidth
        type="text"
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
