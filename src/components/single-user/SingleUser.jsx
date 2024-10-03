import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function SingleUser({ userData, activityData, chartData }) {
  console.log("userData:", userData); // Check if userData has profilePic

  // Filter out the profilePic key
  const filteredUserData = { ...userData };
  delete filteredUserData.profilePic;

  return (
    <div className="main">
      <div className="flex gap-10">
        <div className="info-wrapper">
          <div className="info border-b pb-5 border-gray-600">
            <div className="flex items-center gap-3">
              {/* Conditional check for profilePic */}
              {userData && userData.profilePic ? (
                <img
                  className="w-20 h-20 rounded-full object-cover border"
                  src={userData.profilePic}
                  alt={userData.name || "User profile picture"}
                />
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full" /> // Placeholder if no profilePic
              )}
              <h1 className="text-3xl font-semibold">
                {userData.name || "No Name"}
              </h1>
              <button
                type="button"
                className="px-2 py-1 rounded-md text-sm bg-orange-600 border-none outline-none"
              >
                Update
              </button>
            </div>
            <div className="mt-4 text-md">
              {/* Displaying all userData keys and values except profilePic */}
              {filteredUserData &&
                Object.entries(filteredUserData).map(([key, value], index) => (
                  <div key={index} className="flex gap-3 my-1">
                    <p className="font-bold capitalize">{key}</p>
                    <p>{value}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="chart mt-8">
            <div className="w-auto xl:w-[600px] h-[370px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={730}
                  height={250}
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold ">Latest Activities</h1>
          <div className="">
            <ul className="mt-6 border-l-2 border-orange-600 w-auto xl:w-[420px]">
              {activityData &&
                activityData.map((activity, index) => (
                  <li key={index}>
                    <div className="my-5 bg-[#8884d849] px-5 py-3 rounded-r text-sm">
                      <p>{activity.description}</p>
                      <time className="text-gray-300 inline-block mt-1">
                        {activity.timeAgo}
                      </time>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
