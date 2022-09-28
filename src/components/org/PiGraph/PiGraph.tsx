import React, { VFC } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import useWindowSize from '../../../hooks/WindowSize/useWindowSize';

type Props = {
  data: { index: number; name: string; value: number }[];
};
const COLORS = ['#10B982', '#3B82F6', '#8B5CF7'];
const PiGraph: VFC<Props> = (props) => {
  const { data } = props;
  const [width, height] = useWindowSize();
  return (
    <div className="border-1">
      <PieChart
        width={width / 4}
        height={height / 3}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      >
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#82ca9d"
          // labelを出すとdivからはみ出で消えるので一旦labelなし
          // label
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PiGraph;
