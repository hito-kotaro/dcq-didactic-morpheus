import { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { emptyIssue, issueDataType } from '../../../types/data/penaltyDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const usePenaltyHistoryManagement = () => {
  const penaltySearchHandler = useInputForm();
  const teamSelectHandler = useSelectForm();
  const [issue, setIssue] = useState<issueDataType>(emptyIssue);
  const [isDetail, setIsDetail] = useState(false);
  const [filterdPenalties, setFilterdPenalties] = useState<issueDataType[]>([]);

  const onClickListItem = (i: issueDataType) => {
    setIsDetail(true);
    setIssue(i);
  };

  // requestDataを受け取って条件に一致していれば1していなければ-1を返す
  const filterCheck = (data: issueDataType) => {
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

  const filteringPenalty = (data: issueDataType[]) => {
    setFilterdPenalties(data.filter((d: issueDataType) => filterCheck(d)));
  };

  return {
    isDetail,
    issue,
    filterdPenalties,
    onClickListItem,
    filteringPenalty,
    teamSelectHandler,
    penaltySearchHandler,
  };
};

export default usePenaltyHistoryManagement;
