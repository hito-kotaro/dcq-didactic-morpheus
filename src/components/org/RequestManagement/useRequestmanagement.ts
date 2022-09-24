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

  const filteringRequest = (data: requestDataType[]) => {
    setFilterdRequests(
      data.filter(
        (r: requestDataType) =>
          r.title.indexOf(requestSearchHandler.value) !== -1,
      ),
    );
  };

  const filteringUserSelectMenu = () => {
    setUserSelectItems(
      users.map((u: userDataType) => {
        const item: selectItemType = { id: u.id, label: u.name };
        return item;
      }),
    );
  };

  return {
    isDetail,
    request,
    userSelectItems,
    requestSearchHandler,
    toolStatusSelectHandler,
    toolApplicantSelectHandler,
    filterdRequests,
    filteringRequest,
    setIsDetail,
    onClickRequestItem,
  };
};

export default useRequestmanagement;
