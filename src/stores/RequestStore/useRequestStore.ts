import { useRecoilState } from 'recoil';
import { requestState } from './requestStore';

const useRequestStore = () => {
  const [requests, setRequests] = useRecoilState(requestState);
  return { requests, setRequests };
};

export default useRequestStore;
