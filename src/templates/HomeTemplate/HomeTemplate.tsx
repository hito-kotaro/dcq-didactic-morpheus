import React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideMenu from '../../components/org/SideMenu/SideMenu';

const HomeTemplate = () => {
  const dummy = () => {
    console.log('hello');
  };

  const itemList = [
    { label: '一般設定', icon: <InboxIcon />, action: dummy },
    { label: 'どりかむリスト', icon: <InboxIcon />, action: dummy },
    { label: 'ログアウト', icon: <InboxIcon />, action: dummy },
  ];

  const dataGraph = [
    { month: '1月', 売上: 800, 総売上: 1400 },
    { month: '2月', 売上: 967, 総売上: 1506 },
    { month: '3月', 売上: 1098, 総売上: 989 },
    { month: '4月', 売上: 1200, 総売上: 1228 },
    { month: '5月', 売上: 1108, 総売上: 1100 },
    { month: '6月', 売上: 680, 総売上: 1700 },
  ];

  return (
    <div className="flex h-screen">
      <SideMenu itemList={itemList} />
      <ComposedChart
        width={600}
        height={280}
        data={dataGraph}
        margin={{ top: 20, right: 60, bottom: 0, left: 0 }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar
          dataKey="売上"
          barSize={20}
          stroke="rgba(34, 80, 162, 0.2)"
          fillOpacity={1}
          fill="#2250A2"
        />
      </ComposedChart>
    </div>
  );
};

export default HomeTemplate;
