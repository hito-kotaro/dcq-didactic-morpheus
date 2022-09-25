import React, { VFC } from 'react';
import { assignedPenaltyDateType } from '../../../types/data/penaltyDataType';
import PenaltyHistoryListItem from './PenaltyHistoryListItem';

type Props = {
  penalties: assignedPenaltyDateType[];
  onClick: (p: assignedPenaltyDateType) => void;
};
const PenaltyHistoryList: VFC<Props> = (props) => {
  const { penalties, onClick } = props;
  return (
    <>
      {penalties.map((p: assignedPenaltyDateType) => (
        <PenaltyHistoryListItem penalty={p} onClick={onClick} />
      ))}
    </>
  );
};

export default PenaltyHistoryList;
