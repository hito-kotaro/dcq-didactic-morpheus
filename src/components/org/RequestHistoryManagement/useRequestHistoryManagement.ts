import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { closedRequestDataType } from '../../../types/data/requestDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useRequestHistoryManagement = () => {
  const [closedRequest, setClosedRequest] = useState<closedRequestDataType>({
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
    authorizer: '',
    authorizer_id: 0,
    comment: '',
  });

  const userSelectHandler = useSelectForm();
  const statusSelectHandler = useSelectForm();
  const requestSearchHandler = useInputForm();
  const [filterdRequests, setFilterdRequests] = useState<
    closedRequestDataType[]
  >([]);

  const convertStatus = (val: number) => {
    let status = '';
    if (val === 1) {
      status = 'open';
    } else if (val === 2) {
      status = 'approved';
    } else if (val === 3) {
      status = 'rejected';
    } else if (val === 4) {
      status = 'canceled';
    } else {
      status = '';
    }
    return status;
  };

  const onClickListItem = (r: closedRequestDataType) => {
    setClosedRequest(r);
  };

  // requestDataを受け取って条件に一致していれば1していなければ-1を返す
  const filterCheck = (data: closedRequestDataType) => {
    let flg = false;

    // 名前がallの時の絞り込み
    if (Number(userSelectHandler.value) === 0) {
      if (
        data.status.indexOf(
          convertStatus(Number(statusSelectHandler.value)),
        ) !== -1 &&
        data.title.indexOf(requestSearchHandler.value) !== -1
      ) {
        flg = true;
      }
    } else if (Number(userSelectHandler.value) !== 0) {
      if (
        data.status.indexOf(
          convertStatus(Number(statusSelectHandler.value)),
        ) !== -1 &&
        data.applicant_id === Number(userSelectHandler.value) &&
        data.title.indexOf(requestSearchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filteringRequestHistory = (data: closedRequestDataType[]) => {
    setFilterdRequests(
      data.filter((cr: closedRequestDataType) => filterCheck(cr)),
    );
  };

  return {
    filterdRequests,
    closedRequest,
    onClickListItem,
    filteringRequestHistory,
    requestSearchHandler,
    userSelectHandler,
    statusSelectHandler,
  };
};

export default useRequestHistoryManagement;
