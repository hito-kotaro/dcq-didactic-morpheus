import { useState } from 'react';
import { graphUserData } from '../../../types/data/userDataType';
import useSelectForm from '../../mol/SelectForm/useSelectForm';

const useBarGraph = () => {
  const selectHandler = useSelectForm();
  const [filterdUserData, setFilterdUserData] = useState<graphUserData[]>([]);

  const filteringData = (data: graphUserData[]) => {
    if (Number(selectHandler.value) === 0) {
      // filterしない
      setFilterdUserData(data);
    } else {
      // 選択したチームでフィルターする
      setFilterdUserData(
        data.filter((u: graphUserData) => {
          return u.team_id === Number(selectHandler.value);
        }),
      );
    }
  };
  return { selectHandler, setFilterdUserData, filteringData, filterdUserData };
};

export default useBarGraph;
