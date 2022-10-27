import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useGlobalState from '../../stores/useGlobalState';
import {
  issueDataType,
  issueRequestType,
  penaltyDataType,
  penaltyRequestType,
} from '../../types/data/penaltyDataType';

const usePenaltyApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setPenalties, setIssues } = useGlobalState();

  // テナント内のペナルティを取得
  const fetchAllPenalty = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/penalty');
      const penaltyList: penaltyDataType[] = result.data.penalties;
      setPenalties(penaltyList);
    } catch {
      alert('画面を更新してください');
    }
  };

  const fetchAllIssue = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/issue');
      const issueList: issueDataType[] = result.data.issues;
      setIssues(issueList);
    } catch {
      alert('画面を更新してください');
    }
  };

  const createPenalty = async (createParam: penaltyRequestType) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.post(
        '/penalty',
        createParam,
      );
      console.log(result);
      fetchAllPenalty();
    } catch {
      alert('画面を更新してください');
    }
  };

  const createIssue = async (createParam: issueRequestType) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.post(
        '/issue',
        createParam,
      );
      console.log(result);
      fetchAllIssue();
    } catch {
      alert('画面を更新してください');
    }
  };

  const updatePenalty = async (
    penaltyId: number,
    updateParam: penaltyRequestType,
  ) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.put(
        `/penalty/${penaltyId}`,
        updateParam,
      );
      fetchAllPenalty();
      console.log(result.data);
      return result.data;
    } catch {
      alert('画面を更新してください');
    }
  };

  return {
    fetchAllPenalty,
    fetchAllIssue,
    createPenalty,
    createIssue,
    updatePenalty,
  };
};

export default usePenaltyApi;
