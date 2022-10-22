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
      const filterData = data.filter((u: graphUserData) => {
        return u.team_id === Number(selectHandler.value);
      });
      console.log(filterData);
      setFilterdUserData(
        filterData.length > 0
          ? filterData
          : [{ name: 'NoMember', point: 0, team_id: 1 }],
      );
    }
  };
  return { selectHandler, setFilterdUserData, filteringData, filterdUserData };
};

export default useBarGraph;
