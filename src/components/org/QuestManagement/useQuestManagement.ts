import { useState } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useQuestManagement = () => {
  const questSearchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterdQuests, setFilterdQuests] = useState<questDataType[]>([]);
  const [isDetail, setIsDetail] = useState(false);
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

  const onClickQuestItem = (q: questDataType) => {
    setQuest(q);
    setIsDetail(true);
  };

  const filterCheck = (data: questDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.owner.indexOf(questSearchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.owner_id === Number(selectHandler.value) &&
        data.owner.indexOf(questSearchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filteringQuest = (data: questDataType[]) => {
    setFilterdQuests(data.filter((q: questDataType) => filterCheck(q)));
  };
  return {
    isDetail,
    quest,
    filterdQuests,
    questSearchHandler,
    selectHandler,
    setIsDetail,
    onClickQuestItem,
    filteringQuest,
  };
};

export default useQuestManagement;
