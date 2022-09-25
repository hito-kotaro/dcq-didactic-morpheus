import React, { VFC } from 'react';
import DcpIconGray from '../../../images/dcp_icon_gray_lg.svg';

type Props = {
  msg: string;
};

const EmptyStateIcon: VFC<Props> = (props) => {
  const { msg } = props;

  return (
    <div>
      <div className="text-text text-lg font-semibold text-center border-b-1">
        {msg}
      </div>
      <div className=" mt-10 flex justify-center opacity-25">
        <img src={DcpIconGray} alt="emptyState" />
      </div>
    </div>
  );
};

export default EmptyStateIcon;
