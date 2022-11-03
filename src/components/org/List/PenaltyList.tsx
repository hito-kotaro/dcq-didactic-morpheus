import React, { VFC } from 'react';
import { penaltyDataType } from '../../../types/data/penaltyDataType';
import PenaltyListItem from '../../atoms/ListItems/PenaltyListItem';

type Props = {
  penalties: penaltyDataType[];
  onClick: (p: penaltyDataType) => void;
};
const PenaltyList: VFC<Props> = (props) => {
  const { penalties, onClick } = props;
  return (
    <>
      {penalties.map((p: penaltyDataType) => (
        <PenaltyListItem penalty={p} onClick={onClick} />
      ))}
    </>
  );
};

export default PenaltyList;
