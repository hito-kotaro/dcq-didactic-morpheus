import React, { VFC } from 'react';
import { Button, Divider, TextField } from '@mui/material';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { questDataType } from '../../../types/data/questDataType';
import { createRequestType } from '../../../types/data/requestDataType';
import OwnerHeader from '../PanelHeaders/OwnerHeader';

type Props = {
  quest: questDataType;
  handleClose?: () => void;
};
const QuestDetail: VFC<Props> = (props) => {
  const { quest, handleClose } = props;
  const { createRequest } = useRequestApi();
  const requestHandler = useInputForm();

  const onClickCreateRequest = () => {
    const createParam: createRequestType = {
      title: `${quest.title}-達成`,
      description: requestHandler.value,
      quest_id: quest.id,
      applicant_id: Number(localStorage.getItem('user_id')),
    };
    createRequest(createParam);
    requestHandler.clear();

    if (handleClose) {
      handleClose();
    }
  };

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
          <OwnerHeader
            owner={quest.owner}
            date={quest.date}
            reward={quest.reward}
            status="open"
          />
          <div className="my-3">
            <Divider />
          </div>
          <div className="text-text">
            <div className="flex">
              <div className="text-lg">クエスト詳細</div>
            </div>
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
            <Button variant="contained" onClick={onClickCreateRequest}>
              達成報告を提出
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestDetail;
