import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import { requestDataType } from '../../../types/data/requestDataType';

const useRequestHistoryManagement = () => {
  const userSelect = useSelectForm();
  const statusSelect = useSelectForm();
  const searchHandler = useInputForm();
  const [filterd, setFilterd] = useState<requestDataType[]>([]);

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
  const filterCheck = (data: requestDataType) => {
    let flg = false;

    // 名前がallの時の絞り込み
    if (Number(userSelect.value) === 0) {
      if (
        data.status.indexOf(convertStatus(Number(statusSelect.value))) !== -1 &&
        data.title.indexOf(searchHandler.value) !== -1
      ) {
        flg = true;
      }
    } else if (Number(userSelect.value) !== 0) {
      if (
        data.status.indexOf(convertStatus(Number(statusSelect.value))) !== -1 &&
        data.applicant_id === Number(userSelect.value) &&
        data.title.indexOf(searchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filtering = (data: requestDataType[]) => {
    setFilterd(data.filter((r: requestDataType) => filterCheck(r)));
  };

  return {
    filterd,
    filtering,
    searchHandler,
    userSelect,
    statusSelect,
  };
};

export default useRequestHistoryManagement;
