import { Button, Divider, TextField } from '@mui/material';
import React, { VFC } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { questDataType } from '../../../types/data/questDataType';
import { userDataType } from '../../../types/data/userDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';

type Props = {
  quest: questDataType;
  owner: userDataType;
};
const QuestDetail: VFC<Props> = (props) => {
  const { quest, owner } = props;
  const requestHandler = useInputForm();
  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {quest.title === '' ? 'クエストを選択してください' : quest.title}
      </div>
      {quest.title === '' ? (
        ''
      ) : (
        <div className="px-3">
          <div className="h-3" />
          <OwnerHeader owner={owner} quest={quest} />
          <div className="my-3">
            <Divider />
          </div>
          <div className="text-text">
            <div className="text-lg">クエスト詳細</div>
            <div className="h-3" />
            <div>
              <p>{quest.description}</p>
            </div>
            <div className="my-3">
              <Divider />
            </div>
            <div className="text-lg">クエスト達成報告を発行</div>
            <TextField
              fullWidth
              type="text"
              // label="新しいチームの説明(任意)"
              placeholder={`例) ${quest.example}`}
              variant="outlined"
              onChange={requestHandler.onChange}
              value={requestHandler.value}
              multiline
              maxRows={5}
              minRows={5}
            />
            <div className="h-5" />
            <Button variant="contained">達成報告を提出</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestDetail;
