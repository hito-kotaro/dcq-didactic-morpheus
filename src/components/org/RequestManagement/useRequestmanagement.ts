import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { requestDataType } from '../../../types/data/requestDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import useUserStore from '../../../stores/UserStore/useUserStore';

const useRequestmanagement = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [filterdRequests, setFilterdRequests] = useState<requestDataType[]>([]);
  const requestSearchHandler = useInputForm();
  const applicantSelectHandler = useSelectForm();
  const { users } = useUserStore();

  const [request, setRequest] = useState<requestDataType>({
    id: 0,
    title: '',
    description: '',
    applicant_id: 0,
    applicant: '',
    quest_description: '',
    quest_title: '',
    reward: 0,
    status: '',
    date: '',
  });

  const onClickRequestItem = (r: requestDataType) => {
    setRequest(r);
    setIsDetail(true);
  };

  const filterCheck = (data: requestDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(applicantSelectHandler.value) === 0) {
      if (data.title.indexOf(requestSearchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(applicantSelectHandler.value) !== 0) {
      if (
        data.applicant_id === Number(applicantSelectHandler.value) &&
        data.title.indexOf(requestSearchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filteringRequest = (data: requestDataType[]) => {
    setFilterdRequests(data.filter((r: requestDataType) => filterCheck(r)));
  };

  return {
    request,
    setRequest,
    filterdRequests,
    requestSearchHandler,
    filteringRequest,
    applicantSelectHandler,
    onClickRequestItem,
  };
};

export default useRequestmanagement;
