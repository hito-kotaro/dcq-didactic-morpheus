import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const usePenaltyHistoryManagement = () => {
  const penaltySearchHandler = useInputForm();
  const teamSelectHandler = useSelectForm();
  const [penalty, setPenalty] = useState<assignedPenaltyDateType>({
    id: 0,
    p_id: 0,
    title: '',
    p_title: '',
    p_desciription: '',
    penalty: 0,
    date: '',
    team: '',
    team_id: 0,
    owner: '',
    owner_id: 0,
    authorizer: '',
    authorizer_id: 0,
    comment: '',
  });
  const [isDetail, setIsDetail] = useState(false);
  const [filterdPenalties, setFilterdPenalties] = useState<
    assignedPenaltyDateType[]
  >([]);

  const onClickListItem = (p: assignedPenaltyDateType) => {
    setIsDetail(true);
    setPenalty(p);
  };

  // requestDataを受け取って条件に一致していれば1していなければ-1を返す
  const filterCheck = (data: assignedPenaltyDateType) => {
    let flg = false;

    // 名前がallの時の絞り込み
    if (Number(teamSelectHandler.value) === 0) {
      if (data.title.indexOf(penaltySearchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(teamSelectHandler.value) !== 0) {
      console.log('gomi');
      if (
        data.title.indexOf(penaltySearchHandler.value) !== -1 &&
        data.team_id === Number(teamSelectHandler.value)
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filteringPenalty = (data: assignedPenaltyDateType[]) => {
    setFilterdPenalties(
      data.filter((d: assignedPenaltyDateType) => filterCheck(d)),
    );
  };

  return {
    isDetail,
    penalty,
    filterdPenalties,
    onClickListItem,
    filteringPenalty,
    teamSelectHandler,
    penaltySearchHandler,
  };
};

export default usePenaltyHistoryManagement;
