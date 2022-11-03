import React, { VFC } from 'react';
import { inputHandlerType } from '../../../types/inputHandlerType';
import SearchWindow from '../SearchWindow/SearchWindow';

type Props = { penaltySearchHandler: inputHandlerType };
const PenaltyHistoryMenuHeader: VFC<Props> = (props) => {
  const { penaltySearchHandler } = props;

  return (
    <SearchWindow
      handler={penaltySearchHandler}
      placeholder="リクエストタイトルで検索"
    />
  );
};

export default PenaltyHistoryMenuHeader;
