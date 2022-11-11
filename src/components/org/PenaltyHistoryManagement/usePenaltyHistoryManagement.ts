import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import { issueDataType } from '../../../types/data/penaltyDataType';

const usePenaltyHistoryManagement = () => {
  const searchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterd, setFilterd] = useState<issueDataType[]>([]);

  // requestDataを受け取って条件に一致していれば1していなければ-1を返す
  const filterCheck = (data: issueDataType) => {
    let flg = false;

    // 名前がallの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.title.indexOf(searchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.title.indexOf(searchHandler.value) !== -1 &&
        data.team_id === Number(selectHandler.value)
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filtering = (data: issueDataType[]) => {
    setFilterd(data.filter((d: issueDataType) => filterCheck(d)));
  };

  return {
    filterd,
    filtering,
    selectHandler,
    searchHandler,
  };
};

export default usePenaltyHistoryManagement;
