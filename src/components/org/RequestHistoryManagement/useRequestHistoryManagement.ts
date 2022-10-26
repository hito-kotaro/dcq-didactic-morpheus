import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import {
  emptyRequest,
  requestDataType,
} from '../../../types/data/requestDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useRequestHistoryManagement = () => {
  const [closedRequest, setClosedRequest] =
    useState<requestDataType>(emptyRequest);
  const [isDetail, setIsDetail] = useState(false);
  const [request, setRequest] = useState<requestDataType>(emptyRequest);

  const userSelectHandler = useSelectForm();
  const statusSelectHandler = useSelectForm();
  const requestSearchHandler = useInputForm();
  const [filterdRequests, setFilterdRequests] = useState<requestDataType[]>([]);

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

  const onClickListItem = (r: requestDataType) => {
    setIsDetail(true);
    setRequest(r);
    setClosedRequest(r);
  };

  // requestDataを受け取って条件に一致していれば1していなければ-1を返す
  const filterCheck = (data: requestDataType) => {
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

  const filteringRequestHistory = (data: requestDataType[]) => {
    setFilterdRequests(data.filter((r: requestDataType) => filterCheck(r)));
  };

  return {
    request,
    isDetail,
    filterdRequests,
    closedRequest,
    setRequest,
    setIsDetail,
    onClickListItem,
    filteringRequestHistory,
    requestSearchHandler,
    userSelectHandler,
    statusSelectHandler,
  };
};

export default useRequestHistoryManagement;
