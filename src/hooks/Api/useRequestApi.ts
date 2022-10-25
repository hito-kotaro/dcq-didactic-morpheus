import { AxiosResponse } from 'axios';
import { createAxiosTokenInstance } from '../../lib/axiosInstance';
import useGlobalState from '../../stores/useGlobalState';
import {
  createRequestType,
  updateRequestType,
} from '../../types/data/requestDataType';

const useRequestApi = () => {
  const axiosTokenInstance = createAxiosTokenInstance();
  const { setRequests } = useGlobalState();

  // テナント内のリクエストを全て取得する
  const fetchTenantRequests = async () => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.get('/request');
      setRequests(result.data.requests);
    } catch (e) {
      console.log(e);
    }
  };

  const createRequest = async (createParams: createRequestType) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.post(
        '/request',
        createParams,
      );
    } catch (e) {
      console.log(e);
    }
  };

  const updateRequest = async (id: number, updateParam: updateRequestType) => {
    try {
      const result: AxiosResponse = await axiosTokenInstance.put(
        `/request/${id}`,
        updateParam,
      );
      await setTimeout(fetchTenantRequests, 300);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { createRequest, updateRequest, fetchTenantRequests };
};

export default useRequestApi;
