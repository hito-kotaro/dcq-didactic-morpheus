import React, { VFC } from 'react';
import { issueDataType } from '../../../types/data/penaltyDataType';
import PenaltyHistoryListItem from './PenaltyHistoryListItem';

type Props = {
  issues: issueDataType[];
  // eslint-disable-next-line no-unused-vars
  onClick: (i: issueDataType) => void;
};
const PenaltyHistoryList: VFC<Props> = (props) => {
  const { issues, onClick } = props;
  return (
    <>
      {issues.map((i: issueDataType) => (
        <PenaltyHistoryListItem issue={i} onClick={onClick} />
      ))}
    </>
  );
};

export default PenaltyHistoryList;
