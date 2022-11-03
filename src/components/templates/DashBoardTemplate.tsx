import React, { ReactElement, VFC } from 'react';
import useWindowSize from '../../hooks/WindowSize/useWindowSize';
import DashBoardHeader from '../mol/PanelHeaders/DashBoardHeader';
import PiGraph from '../org/PiGraph/PiGraph';

type Props = {
  firstLine: ReactElement;
  secondLine: ReactElement;
  list: ReactElement;
  graph: ReactElement;
};
const DashBoardTemplate: VFC<Props> = (props) => {
  const { firstLine, secondLine, list, graph } = props;
  const [width, height] = useWindowSize();

  // 高さがy以上ならh-xx
  let listClass = '';
  if (height < 800) {
    listClass = 'w-2/3 p-5 h-64';
  } else if (height <= 1080) {
    listClass = 'w-2/3 p-5 h-128';
  }

  return (
    <div>
      <DashBoardHeader />
      <div>
        {firstLine}
        {secondLine}
        <div className="flex">
          <div className={listClass}>{list}</div>
          <div className="w-1/3 pt-5">{graph}</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardTemplate;
