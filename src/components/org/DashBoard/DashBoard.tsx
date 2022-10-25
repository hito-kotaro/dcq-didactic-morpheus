import React, { ReactElement } from 'react';
import useGlobalState from '../../../stores/useGlobalState';
import { teamDataType } from '../../../types/data/teamDataType';
import DcpIcon from '../../atoms/DcpIcon/DcpIcon';
import PenaltyIcon from '../../atoms/Icons/PenaltyIcon';
import PIcon from '../../atoms/Icons/PIcon';
import QIcon from '../../atoms/Icons/QIcon';
import RIcon from '../../atoms/Icons/RIcon';
import SumIcon from '../../atoms/Icons/SumIcon';
import DisplayWrapRow from '../../mol/DisplayWraper/DisplayWrapRow';
import PointDisplay from '../../mol/PointDisplay/PointDisplay';
import RewardList from '../../mol/RewardList/RewardList';
import DashBoardTemplate from '../../templates/DashBoardTemplate';
import PiGraph from '../PiGraph/PiGraph';

const DashBoard = () => {
  const { teams } = useGlobalState();

  // テナント内の合計ポイント
  const totalPoint: number = teams.reduce(
    (acc: number, val: teamDataType): number => {
      return acc + val.point;
    },
    0,
  );

  // テナント内の合計ペナルティ
  const totalPenalty: number = teams.reduce(
    (acc: number, val: teamDataType): number => {
      return acc + val.penalty;
    },
    0,
  );

  const firstDisplays: ReactElement[] = [
    <PointDisplay
      icon={<DcpIcon />}
      msg="どりかむポイント"
      point={totalPoint}
    />,
    <PointDisplay
      icon={<PenaltyIcon />}
      msg="ペナルティポイント"
      point={totalPenalty}
    />,
    <PointDisplay
      icon={<SumIcon />}
      msg="合計"
      point={totalPoint - totalPenalty}
    />,
  ];

  const secondDisplays: ReactElement[] = [
    <PointDisplay icon={<QIcon />} msg="発行済クエスト数" point={10} />,
    <PointDisplay icon={<PIcon />} msg="発行済ペナルティ数" point={10} />,
    <PointDisplay icon={<RIcon />} msg="未承認リクエスト数" point={3} />,
  ];

  const convertToPiGraph = () => {
    const conv = teams.map((t: teamDataType) => ({
      index: t.id,
      name: t.name,
      value: t.point - t.penalty < 0 ? 0 : t.point - t.penalty,
    }));
    return conv;
  };

  return (
    <DashBoardTemplate
      firstLine={<DisplayWrapRow displays={firstDisplays} />}
      secondLine={<DisplayWrapRow displays={secondDisplays} />}
      list={<RewardList />}
      graph={
        <div>
          <div className="text-text text-lg font-semibold">
            チーム毎の取得数
          </div>

          <PiGraph data={convertToPiGraph()} />
        </div>
      }
    />
  );
};

export default DashBoard;
