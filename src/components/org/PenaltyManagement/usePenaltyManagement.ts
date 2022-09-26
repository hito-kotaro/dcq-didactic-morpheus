import React, { useState } from 'react';
import useInputForm from '../../../hooks/InputForm/useInputForm';
import { penaltyDataType } from '../../../types/data/penaltyDataType';

const usePenaltyManagement = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [filterdPenalties, setFilterdPenalties] = useState<penaltyDataType[]>(
    [],
  );
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

  const filteringPenalty = (data: penaltyDataType[]) => {
    setFilterdPenalties(
      data.filter(
        (q: penaltyDataType) =>
          q.title.indexOf(penaltySearchHandler.value) !== -1,
      ),
    );
  };

  return {
    penalty,
    filterdPenalties,
    isDetail,
    penaltySearchHandler,
    onClickPenaltyItem,
    filteringPenalty,
  };
};

export default usePenaltyManagement;
