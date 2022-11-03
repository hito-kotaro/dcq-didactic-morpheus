import React, { VFC } from 'react';
import DcpIconSm from '../../../images/dcp_icon_sm.svg';
import DcpIconMd from '../../../images/dcp_icon_md.svg';
import DcpIconLg from '../../../images/dcp_icon_lg.svg';

type Props = {
  size?: 'sm' | 'lg';
};

const DcpIcon: VFC<Props> = (props) => {
  const { size } = props;

  let icon;
  if (size === 'sm') {
    icon = DcpIconSm;
  } else if (size === 'lg') {
    icon = DcpIconLg;
  } else {
    icon = DcpIconMd;
  }

  return <img src={icon} alt="どりかむポイントアイコン" />;
};

export default DcpIcon;
