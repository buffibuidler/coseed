import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Rechart() {
  //   return (
  //     <ResponsiveContainer width="100%" height="100%">
  //       <AreaChart
  //         width={500}
  //         height={400}
  //         data={data}
  //         margin={{
  //           top: 10,
  //           right: 30,
  //           left: 0,
  //           bottom: 0,
  //         }}
  //       >
  //         <CartesianGrid strokeDasharray="3 3" />
  //         <XAxis dataKey="name" />
  //         <YAxis />
  //         <Tooltip />
  //         <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  //       </AreaChart>
  //     </ResponsiveContainer>
  //   );
  return (
    <ResponsiveContainer height={187}>
      <AreaChart
        data={data}
        margin={{ top: -45, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
            <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotoneX"
          dataKey="uv"
          stroke="var(--warning)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Rechart;
