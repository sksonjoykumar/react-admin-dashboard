import React from "react";
import SingleUser from "../../components/single-user/SingleUser";
import {
  singleActivityData,
  singleChartData,
  singleUserData,
} from "../../usersData/usersData";

function User() {
  return (
    <div>
      <SingleUser
        userData={singleUserData}
        activityData={singleActivityData}
        chartData={singleChartData}
      />
    </div>
  );
}

export default User;
