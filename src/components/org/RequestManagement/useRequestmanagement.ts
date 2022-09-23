import { useState } from 'react';
import { requestDataType } from '../../../types/data/requestDataType';

const useRequestmanagement = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [request, setRequest] = useState<requestDataType>({
    id: 0,
    date: '',
    title: '',
    description: '',
    q_title: '',
    q_description: '',
    q_owner_id: 0,
    q_owner: '',
    q_reward: 0,
    status: '',
    applicant_id: 0,
    applicant: '',
  });

  const onClickRequestItem = (r: requestDataType) => {
    setRequest(r);
    setIsDetail(true);
  };
  return { isDetail, request, setIsDetail, onClickRequestItem };
};

export default useRequestmanagement;
