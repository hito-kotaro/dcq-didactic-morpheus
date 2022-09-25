import { Button, Divider, TextField } from '@mui/material';
import React, { VFC } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { requestDataType } from '../../../types/data/requestDataType';
import OwnerHeader from '../../mol/OwnerHeader/OwnerHeader';

type Props = {
  request: requestDataType;
};

const RequestDetail: VFC<Props> = (props) => {
  const { request } = props;
  const commentHandler = useInputForm();
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
        reward={request.q_reward}
        status={request.status}
      />

      <div className="my-3">
        <Divider />
      </div>
      <div className="h-5" />
      <div className="text-text text-lg font-semibold border-b-1">
        {request.q_title}
      </div>

      <div className="text-text mt-3">
        <p>{request.q_description}</p>
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
        <Button variant="contained">承認</Button>
        <div className="w-3" />
        <Button variant="contained">却下</Button>
        <div className="w-3" />
        <Button variant="contained">キャンセル</Button>
        <div className="w-3" />
        <Button variant="contained">更新</Button>
      </div>
      <div className="h-5" />
    </div>
  );
};

export default RequestDetail;
