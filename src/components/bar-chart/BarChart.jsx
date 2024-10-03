import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function BarChartComponent({ title, dataKey, color, chartData }) {
  return (
    <>
      <div className="">
        <h1>{title}</h1>
        <div className="bar w-full h-full">
          <ResponsiveContainer width="100%" height={115}>
            <BarChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                cursor={{ fill: "none" }}
              />
              <Bar dataKey={dataKey} fill={color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default BarChartComponent;
