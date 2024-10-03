import React from "react";
import { users } from "../../usersData/usersData";
function TopBox() {
  return (
    <>
      <div className="">
        <h1 className="text-slate-white text-center md:text-left font-semibold text-2xl">
          Top Deals
        </h1>

        {users &&
          users.map((user, id) => {
            return (
              <div
                className="flex md:flex-col xl:flex-row justify-between items-top my-2 xl:my-5"
                key={id}
              >
                <div className="user flex  gap-2" key={id}>
                  <img
                    src={user.img}
                    alt=""
                    className=" w-12 h-12 rounded-full border"
                  />
                  <div className="text-md">
                    <p className="text-[.8rem]">{user.name}</p>
                    <p className="text-[.8rem]">{user.email}</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-md font-semibold">${user.amount}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default TopBox;
