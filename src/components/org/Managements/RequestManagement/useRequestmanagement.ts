import { useState } from 'react';
import useInputForm from '../../../../hooks/InputForm/useInputForm';
import { requestDataType } from '../../../../types/data/requestDataType';
import useSelectForm from '../../../mol/SelectForm/useSelectForm';

const useRequestmanagement = () => {
  const [filterd, setFilterd] = useState<requestDataType[]>([]);
  const searchHandler = useInputForm();
  const selectHandler = useSelectForm();

  // const [request, setRequest] = useState<requestDataType>(emptyRequest);

  const filterCheck = (data: requestDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.title.indexOf(searchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.applicant_id === Number(selectHandler.value) &&
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
    searchHandler,
    selectHandler,
    filtering,
  };
};

export default useRequestmanagement;
