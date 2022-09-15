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
  data: { name: string; point: number }[];
  width: number;
  height: number;
};

const BarGraph: VFC<Props> = (props) => {
  const { data, width, height } = props;
  return (
    // <ResponsiveContainer>
    <ComposedChart
      layout="vertical"
      data={data}
      width={width - 300}
      height={data.length * 50 + 200}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    >
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="point" barSize={20} fillOpacity={1} fill="#FBA305" />
    </ComposedChart>
    // </ResponsiveContainer>
  );
};

export default BarGraph;
