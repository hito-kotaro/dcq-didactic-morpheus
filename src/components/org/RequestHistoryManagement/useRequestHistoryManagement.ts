import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { closedRequestDataType } from '../../../types/data/requestDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useRequestHistoryManagement = () => {
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
    console.log('kuso');
    setFilterdRequests(
      data.filter((cr: closedRequestDataType) => filterCheck(cr)),
    );
  };

  return {
    filterdRequests,
    filteringRequestHistory,
    requestSearchHandler,
    userSelectHandler,
    statusSelectHandler,
  };
};

export default useRequestHistoryManagement;
