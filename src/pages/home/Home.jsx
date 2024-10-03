import React from "react";
import TopBox from "../../components/top-box/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import {
  chartBoxProducts,
  chartBoxRatios,
  chartBoxRevenue,
  chartBoxTotalProfit,
  chartBoxTotalVisit,
  chartBoxUser,
  data,
} from "../../usersData/usersData";
import BarChart from "../../components/bar-chart/BarChart";
import PieChart from "../../components/pie-chart/PieChart";
import BigChart from "../../components/big-chart/BigChart";

function Home() {
  return (
    <>
      <div className="box-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  auto-rows-min-158 gap-4 lg:h-[685px]">
        <div className="grid row-span-3 col-span-3 md:col-span-1 border border-gray-600 p-3 rounded-md">
          <TopBox />
        </div>
        <div className="border grid col-span-3 md:col-span-2 lg:col-span-1  border-gray-600 p-3 rounded-md ">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="border grid col-span-3 md:col-span-2 lg:col-span-1  border-gray-600 p-3 rounded-md">
          <ChartBox {...chartBoxProducts} />
        </div>
        <div className="grid row-span-3 col-span-3 md:col-span-2 lg:col-span-1 border border-gray-600 p-3 rounded-md">
          <PieChart {...data} />
        </div>
        <div className="border col-span-3 md:col-span-2 lg:col-span-1 border-gray-600 p-3 rounded-md">
          <ChartBox {...chartBoxRatios} />
        </div>
        <div className="border  col-span-3 md:col-span-2 lg:col-span-1  border-gray-600 p-3 rounded-md">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="grid row-span-2 col-span-3 lg:col-span-2 border border-gray-600 p-3 rounded-md">
          <BigChart />
        </div>
        <div className="border col-span-3 lg:col-span-1 border-gray-600 p-3 rounded-md">
          <BarChart {...chartBoxTotalVisit} />
        </div>
        <div className="border col-span-3 lg:col-span-1 border-gray-600 p-3 rounded-md">
          <BarChart {...chartBoxTotalProfit} />
        </div>
      </div>
    </>
  );
}

export default Home;
