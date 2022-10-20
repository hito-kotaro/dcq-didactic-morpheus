import React, { VFC } from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from 'recharts';

type Props = {
  data: { team_name?: string; point: number }[];
  width: number;
  height: number;
};

const BarGraph: VFC<Props> = (props) => {
  const { data, width, height } = props;
  return (
    // <ResponsiveContainer>
    <ComposedChart
      // layout="vertical"
      data={data}
      width={width - width / 4}
      height={height - height / 4}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    >
      <YAxis type="number" />
      <XAxis type="category" dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="point" barSize={20} fillOpacity={1} fill="#FBA305" />
    </ComposedChart>
    // </ResponsiveContainer>
  );
};

export default BarGraph;
