"use client";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart,
  ResponsiveContainer,
  Line,
} from "recharts";
import styles from "./page.module.css";
import { useState } from "react";

const data = [
  { name: "a", value: 12 },
  { name: "b", value: 5 },
  { name: "c", value: 5 },
  { name: "d", value: 8 },
  { name: "e", value: 20 },
  { name: "f", value: 2 },
];

export default function Graphic() {
  const [state, setState] = useState({
    opacity: {
      uv: 1,
      pv: 1,
    },
  });
  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;
    const { opacity } = state;

    setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;
    const { opacity } = state;

    setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };
  return (
    <div style={{ width: "100%" }} className={styles.container}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip wrapperStyle={{ backgroundColor: '#13293D' }} />
        <Legend />
        <Bar dataKey="value" fill="#1B98E0" />
      </BarChart>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
          // onMouseEnter={this.handleMouseEnter}
          // onMouseLeave={this.handleMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="value"
            // strokeOpacity={opacity.pv}
            stroke="#1B98E0"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="notes">Tips: Hover the legend !</p>
    </div>
  );
}
