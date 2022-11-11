import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const usePenaltyManagement = () => {
  const [filterd, setFilterd] = useState<penaltyDataType[]>([]);
  const selectHandler = useSelectForm();
  const searchHandler = useInputForm();

  const filterCheck = (data: penaltyDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.title.indexOf(searchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.owner_id === Number(selectHandler.value) &&
        data.title.indexOf(searchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filtering = (data: penaltyDataType[]) => {
    setFilterd(data.filter((p: penaltyDataType) => filterCheck(p)));
  };

  return {
    filterd,
    searchHandler,
    selectHandler,
    filtering,
  };
};

export default usePenaltyManagement;
