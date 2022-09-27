import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { requestDataType } from '../../../types/data/requestDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';
import { users } from '../../../testData/UserData';
import { selectItemType } from '../../mol/SelectForm/selectItemType';
import { userDataType } from '../../../types/data/userDataType';

const useRequestmanagement = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [filterdRequests, setFilterdRequests] = useState<requestDataType[]>([]);
  const [userSelectItems, setUserSelectItems] = useState<selectItemType[]>([]);
  const requestSearchHandler = useInputForm();
  const toolStatusSelectHandler = useSelectForm();
  const toolApplicantSelectHandler = useSelectForm();
  const applicantSelectHandler = useSelectForm();

  const [request, setRequest] = useState<requestDataType>({
    id: 0,
    date: '',
    title: '',
    description: '',
    q_title: '',
    q_description: '',
    q_owner_id: 0,
    q_owner: '',
    q_reward: 0,
    status: '',
    applicant_id: 0,
    applicant: '',
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
    filterdRequests,
    requestSearchHandler,
    filteringRequest,
    applicantSelectHandler,
    onClickRequestItem,
  };
};

export default useRequestmanagement;
