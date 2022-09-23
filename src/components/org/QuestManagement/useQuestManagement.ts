import { useState } from 'react';
import { questDataType } from '../../../types/data/questDataType';
import { users } from '../../../testData/UserData';
import { userDataType } from '../../../types/data/userDataType';
import useInputForm from '../../../hooks/InputForm/useInputForm';

const useQuestManagement = () => {
  const questSearchHandler = useInputForm();
  const [filterdQuests, setFilterdQuests] = useState<questDataType[]>([]);
  const [isDetail, setIsDetail] = useState(false);
  const [owner, setOwner] = useState<userDataType>({
    id: 0,
    name: '',
    team: '',
    team_id: 0,
    point: 0,
    role: '',
    role_id: 0,
  });
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

  // クエストをクリックした時に、クエストとユーザを取得する必要あり
  const onClickQuestItem = (q: questDataType) => {
    setQuest(q);
    setIsDetail(true);
    const user: userDataType[] = users.filter((u: userDataType) => {
      return u.id === q.owner_id;
    });
    setOwner(user[0]);
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
    owner,
    questSearchHandler,
    setIsDetail,
    onClickQuestItem,
    filteringQuest,
  };
};

export default useQuestManagement;
