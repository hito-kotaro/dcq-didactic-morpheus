import { Button, Divider, TextField } from '@mui/material';
import React, { VFC } from 'react';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import {
  requestDataType,
  updateRequestType,
} from '../../../types/data/requestDataType';
import OwnerHeader from '../PanelHeaders/OwnerHeader';

// 表示の時に渡されるだけだから変わっていない
type Props = {
  request: requestDataType;
  handleClose?: () => void;
};

const RequestDetail: VFC<Props> = (props) => {
  const { request, handleClose } = props;
  const { updateRequest } = useRequestApi();
  const commentHandler = useInputForm();

  const wrapOnClickUpdate = async (status: string) => {
    const updateParam: updateRequestType = {
      status,
      auth_comment: commentHandler.value,
    };

    if (handleClose) {
      handleClose();
    }

    await updateRequest(request.id, updateParam);
  };

  return (
    <div className="px-3">
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {request.title}
      </div>
      <div className="h-3" />

      <div className="h-3" />
      <OwnerHeader
        owner={request.applicant}
        date={`${request.created_at.substring(
          0,
          10,
        )} ${request.created_at.substring(11, 16)}`}
        reward={request.reward}
        status={request.status}
      />

      <div className="my-3">
        <Divider />
      </div>
      <div className="h-5" />
      <div className="text-text text-lg font-semibold border-b-1">
        {request.quest_title}
      </div>

      <div className="text-text mt-3">
        <p>{request.quest_description}</p>
      </div>

      <div className="h-5" />
      <div className="text-text text-lg font-semibold border-b-1">
        {request.title}
      </div>
      <div className="text-text mt-3">
        <p>{request.description}</p>
      </div>
      <div className="h-5" />
      <div className="text-text text-lg font-semibold border-b-1">コメント</div>
      <div className="h-5" />
      <TextField
        fullWidth
        type="text"
        placeholder="(任意)"
        variant="outlined"
        onChange={commentHandler.onChange}
        value={commentHandler.value}
        multiline
        maxRows={5}
        minRows={5}
      />
      <div className="h-5" />
      <div className="flex justify-end">
        <Button
          variant="contained"
          onClick={() => wrapOnClickUpdate('approved')}
        >
          承認
        </Button>
        <div className="w-3" />
        <Button
          variant="contained"
          onClick={() => wrapOnClickUpdate('rejected')}
        >
          却下
        </Button>
        <div className="w-3" />
        <Button
          variant="contained"
          onClick={() => wrapOnClickUpdate('canceled')}
        >
          キャンセル
        </Button>
        <div className="w-3" />
      </div>
      <div className="h-5" />
    </div>
  );
};

export default RequestDetail;
