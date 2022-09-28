import React, { VFC } from 'react';
import SumIconSm from '../../../images/sum_icon_sm.svg';
import SumIconMd from '../../../images/sum_icon_md.svg';
import SumIconLg from '../../../images/sum_icon_lg.svg';

type Props = { size?: 'sm' | 'lg' };

const SumIcon: VFC<Props> = (props) => {
  const { size } = props;
  let icon;
  if (size === 'sm') {
    icon = SumIconSm;
  } else if (size === 'lg') {
    icon = SumIconLg;
  } else {
    icon = SumIconMd;
  }

  return <img src={icon} alt="penaltyIcon" />;
};

export default SumIcon;
