import { useState } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import { users } from '../../../testData/UserData';
import { userDataType } from '../../../types/data/userDataType';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const useQuestManagement = () => {
  const questSearchHandler = useInputForm();
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

  const filteringQuest = (data: questDataType[]) => {
    setFilterdQuests(
      data.filter(
        (q: questDataType) => q.title.indexOf(questSearchHandler.value) !== -1,
      ),
    );
  };
  return {
    isDetail,
    quest,
    filterdQuests,
    // owner,
    questSearchHandler,
    setIsDetail,
    onClickQuestItem,
    filteringQuest,
  };
};

export default useQuestManagement;
