import React from "react";
import {
  Pie,
  PieChart as RechartsPieChart,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { data } from "../../usersData/usersData";

function CustomPieChart({ title, value, chartData, name }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  let dataValue = data.chartData.map((item) => item);
  console.log(dataValue[0].name);
  //   for (let a of chartData) {
  //     console.log(a.name);
  //   }

  return (
    <>
      <main>
        <div>
          <div className="">
            <h1 className="text-xl xl:text-2xl font-semibold ml-4 mt-1">
              {title}
            </h1>
          </div>
          <div className="w-full h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Tooltip
                  contentStyle={{
                    background: "tomato",
                    borderRadius: "3px",
                  }}
                />
                <Pie
                  data={chartData}
                  cx="50%" // Center horizontally
                  cy="50%" // Center vertically
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey={value}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-5 ">
            <div className="flex  justify-evenly xl:gap-10">
              <div className="">
                <p className="text-sm">
                  <span className="w-3 h-3 rounded-full mr-1 inline-block bg-[#0088FE]"></span>
                  <span>{dataValue[0].name}</span>
                </p>
                <p className="text-sm font-semibold ml-5">
                  {dataValue[0].value}
                </p>
              </div>
              <div className="">
                <p className="text-sm">
                  <span className="w-3 h-3 rounded-full mr-1 inline-block bg-[#00C49F]"></span>
                  <span>{dataValue[1].name}</span>
                </p>
                <p className="text-sm font-semibold ml-5">
                  {" "}
                  {dataValue[1].value}
                </p>
              </div>
            </div>
            <div className="flex  justify-evenly xl:gap-10">
              <div className="">
                <p className="text-sm">
                  <span className="w-3 h-3 rounded-full mr-1 inline-block bg-[#FFBB28]"></span>
                  <span>{dataValue[2].name}</span>
                </p>
                <p className="text-sm font-semibold ml-5">
                  {" "}
                  {dataValue[2].value}
                </p>
              </div>
              <div className="">
                <p className="text-sm">
                  <span className="w-3 h-3 rounded-full mr-1 inline-block bg-[#FF8042]"></span>
                  <span>{dataValue[3].name}</span>
                </p>
                <p className="text-sm font-semibold ml-5">
                  {" "}
                  {dataValue[3].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CustomPieChart;
