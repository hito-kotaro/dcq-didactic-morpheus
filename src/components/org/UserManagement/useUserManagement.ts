import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import { userDataType } from '../../../types/data/userDataType';

const useUserManagement = () => {
  const searchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterd, setFilterd] = useState<userDataType[]>([]);

  const filterCheck = (data: userDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.name.indexOf(searchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.role_id === Number(selectHandler.value) &&
        data.name.indexOf(searchHandler.value) !== -1
      ) {
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
