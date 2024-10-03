import React from "react";
import SingleUser from "../../components/single-user/SingleUser";
import {
  singleActivityData,
  singleChartData,
  singleProductData,
} from "../../usersData/usersData";

function Product() {
  return (
    <div>
      <SingleUser
        chartData={singleChartData}
        userData={singleProductData}
        activityData={singleActivityData}
      />
    </div>
  );
}

export default Product;
