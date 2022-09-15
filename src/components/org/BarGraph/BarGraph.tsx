import React, { VFC } from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  data: { name: string; point: number }[];
};

const BarGraph: VFC<Props> = (props) => {
  const { data } = props;

  return (
    <ResponsiveContainer>
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 50, bottom: 0, left: 50 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar
          dataKey="point"
          barSize={20}
          // stroke="rgba(34, 80, 162, 0.2)"
          fillOpacity={1}
          fill="#FBA305"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
