import { useState } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useQuestManagement = () => {
  const searchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterd, setFilterd] = useState<questDataType[]>([]);
  const [quest, setQuest] = useState<questDataType>({
    id: 0,
    title: '',
    description: '',
    reward: 0,
    date: '',
    owner: '',
    owner_id: 0,
    example: '',
  });

  const filterCheck = (data: questDataType) => {
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

  const filtering = (data: questDataType[]) => {
    setFilterd(data.filter((q: questDataType) => filterCheck(q)));
  };

  return {
    quest,
    filterd,
    searchHandler,
    selectHandler,
    setQuest,
    filtering,
  };
};

export default useQuestManagement;
