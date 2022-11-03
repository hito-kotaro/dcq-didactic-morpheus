import React, { VFC } from 'react';
import { inputHandlerType } from '../../../types/inputHandlerType';
import SearchWindow from '../SearchWindow/SearchWindow';

type Props = {
  requestSearchHandler: inputHandlerType;
};

const RequestHistoryTool: VFC<Props> = (props) => {
  const { requestSearchHandler } = props;

  return (
    <SearchWindow
      handler={requestSearchHandler}
      placeholder="リクエストタイトルで検索"
    />
  );
};

export default RequestHistoryTool;
