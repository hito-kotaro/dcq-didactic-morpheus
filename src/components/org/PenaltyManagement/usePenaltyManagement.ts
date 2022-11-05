import React, { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import useGlobalState from '../../../stores/useGlobalState';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const usePenaltyManagement = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [filterdPenalties, setFilterdPenalties] = useState<penaltyDataType[]>(
    [],
  );
  const selectHandler = useSelectForm();
  const { penalties } = useGlobalState();
  const penaltySearchHandler = useInputForm();
  const [penalty, setPenalty] = useState<penaltyDataType>({
    id: 0,
    title: '',
    description: '',
    penalty: 0,
    date: '',
    owner: '',
    owner_id: 0,
  });

  const onClickPenaltyItem = (p: penaltyDataType) => {
    setPenalty(p);
    setIsDetail(true);
  };

  const filterCheck = (data: penaltyDataType) => {
    let flg = false;

    // allの時の絞り込み
    if (Number(selectHandler.value) === 0) {
      if (data.title.indexOf(penaltySearchHandler.value) !== -1) {
        flg = true;
      }
    } else if (Number(selectHandler.value) !== 0) {
      if (
        data.owner_id === Number(selectHandler.value) &&
        data.title.indexOf(penaltySearchHandler.value) !== -1
      ) {
        flg = true;
      }
    }
    return flg;
  };

  const filteringPenalty = (data: penaltyDataType[]) => {
    setFilterdPenalties(data.filter((p: penaltyDataType) => filterCheck(p)));
  };

  const pickPenalty = (id: number): penaltyDataType => {
    const pick = penalties.filter((p: penaltyDataType) => p.id === id);
    return pick[0];
  };

  return {
    penalty,
    filterdPenalties,
    isDetail,
    penaltySearchHandler,
    onClickPenaltyItem,
    filteringPenalty,
    pickPenalty,
    selectHandler,
  };
};

export default usePenaltyManagement;
