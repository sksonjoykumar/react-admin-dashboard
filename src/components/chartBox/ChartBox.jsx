import React from "react";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
// import icon from "../../usersData/usersData";

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

function ChartBox({
  title,
  color,
  dataKey,
  chartData,
  percentage,
  number,
  icon,
}) {
  return (
    <>
      <div className="main flex h-full justify-between">
        <div className="flex flex-col justify-between ">
          <div className="flex gap-1 items-center">
            <img src={icon} className="w-7 h-7" alt="img" />

            {/* <icon icon={MdOutlinePeopleAlt} /> */}
            <p className="text-md">{title}</p>
          </div>

          <h1 className="font-bold text-3xl text-white">{number}</h1>
          <Link to={"/"} className="text-md" style={{ color: color }}>
            View all
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-full xl:w-[115px] h-full">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={chartData}>
                <Tooltip
                  contentStyle={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 40 }}
                />
                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="">
            <p
              className="text-md font-semibold text-right"
              style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
            >
              {percentage}%
            </p>
            <p className="text-sm text-right text-gray-400">this month</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartBox;
