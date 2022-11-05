import { useState } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import useGlobalState from '../../../stores/useGlobalState';

const useQuestManagement = () => {
  const questSearchHandler = useInputForm();
  const selectHandler = useSelectForm();
  const [filterdQuests, setFilterdQuests] = useState<questDataType[]>([]);
  const [isDetail, setIsDetail] = useState(false);
  const { quests } = useGlobalState();
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
      if (data.title.indexOf(questSearchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.owner_id === Number(selectHandler.value) &&
        data.title.indexOf(questSearchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    console.log(flg);
    return flg;
  };

  const filteringQuest = (data: questDataType[]) => {
    setFilterdQuests(data.filter((q: questDataType) => filterCheck(q)));
  };

  const pickQuest = (id: number): questDataType => {
    const pick = quests.filter((q: questDataType) => q.id === id);
    return pick[0];
  };

  return {
    isDetail,
    quest,
    filterdQuests,
    questSearchHandler,
    selectHandler,
    pickQuest,
    setIsDetail,
    onClickQuestItem,
    filteringQuest,
  };
};

export default useQuestManagement;
