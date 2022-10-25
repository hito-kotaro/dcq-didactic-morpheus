import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useGlobalState from '../../stores/useGlobalState';
import {
  questRequestType,
  questDataType,
} from '../../types/data/questDataType';

const useQuestApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setQuests } = useGlobalState();

  // テナント内のクエストを取得
  const fetchAllQuests = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/quest');
      const questList: questDataType[] = result.data.quests;
      console.log(questList);
      setQuests(questList);
    } catch {
      alert('画面を更新してください');
    }
  };

  const createQuest = async (createParam: questRequestType) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.post(
        '/quest',
        createParam,
      );
      console.log(result);
      fetchAllQuests();
    } catch {
      alert('画面を更新してください');
    }
  };

  const updateQuest = async (
    questId: number,
    updateParam: questRequestType,
  ) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.put(
        `/quest/${questId}`,
        updateParam,
      );
      console.log(result);
      fetchAllQuests();
      console.log('fetch All Quest');
    } catch {
      alert('画面を更新してください');
    }
  };

  return { createQuest, updateQuest, fetchAllQuests };
};

export default useQuestApi;
