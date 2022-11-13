import { useState } from 'react';
import useInputForm from '../../../../hooks/InputForm/useInputForm';
import { userDataType } from '../../../../types/data/userDataType';
import useSelectForm from '../../../mol/SelectForm/useSelectForm';

const useUserManagement = () => {
  const searchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterd, setFilterd] = useState<userDataType[]>([]);

  const filterCheck = (data: userDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      flg = true;
    } else if (Number(selectHandler.value) !== 0) {
      if (data.name.indexOf(searchHandler.value) !== -1) {
        flg = true;
      }
    }
    return flg;
  };

  const filtering = (data: userDataType[]) => {
    setFilterd(data.filter((u: userDataType) => filterCheck(u)));
  };

  return {
    filterd,
    searchHandler,
    selectHandler,
    filtering,
  };
};

export default useUserManagement;
