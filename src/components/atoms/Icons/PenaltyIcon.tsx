import React, { VFC } from 'react';
import PenaltyIconSm from '../../../images/dcp_icon_penalty_sm.svg';
import PenaltyIconMd from '../../../images/dcp_icon_penalty_md.svg';
import PenaltyIconLg from '../../../images/dcp_icon_penalty_lg.svg';

type Props = {
  size?: 'sm' | 'lg';
};

const PenaltyIcon: VFC<Props> = (props) => {
  const { size } = props;

  let icon;
  if (size === 'sm') {
    icon = PenaltyIconSm;
  } else if (size === 'lg') {
    icon = PenaltyIconLg;
  } else {
    icon = PenaltyIconMd;
  }

  return <img src={icon} alt="penaltyIcon" />;
};

export default PenaltyIcon;
