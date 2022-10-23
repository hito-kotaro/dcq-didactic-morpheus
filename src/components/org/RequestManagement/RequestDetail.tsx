import { Button, Divider, TextField } from '@mui/material';
import React, { VFC } from 'react';
import useRequestApi from '../../../hooks/Api/useRequestApi';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import {
  requestDataType,
  updateRequestType,
} from '../../../types/data/requestDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';

type Props = {
  request: requestDataType;
};

const RequestDetail: VFC<Props> = (props) => {
  const { request } = props;
  const { updateRequest } = useRequestApi();
  const commentHandler = useInputForm();

  const onClickUpdate = (status: string) => {
    const updateParam: updateRequestType = {
      status,
    };
    updateRequest(request.id, updateParam);
  };

  console.log('updateDetail');

  return (
    <div className="px-3">
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {request.title}
      </div>
      <div className="h-3" />

      <div className="h-3" />
      <OwnerHeader
        owner={request.applicant}
        date={request.date}
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
        <Button variant="contained" onClick={() => onClickUpdate('approved')}>
          承認
        </Button>
        <div className="w-3" />
        <Button variant="contained" onClick={() => onClickUpdate('rejected')}>
          却下
        </Button>
        <div className="w-3" />
        <Button variant="contained" onClick={() => onClickUpdate('canceled')}>
          キャンセル
        </Button>
        <div className="w-3" />
      </div>
      <div className="h-5" />
    </div>
  );
};

export default RequestDetail;
