import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegPaste } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineProduct } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import { CgFormatLeft } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineBackup } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import "./menu.css";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <div className="mt-2 main">
          <span className="uppercase text-[13px] text-gray-400">Main</span>
          <div className="ml-1">
            <NavLink
              to={"/"}
              className={
                "flex items-center gap-2 p-2 hover:bg-slate-700 hover:rounded-md"
              }
            >
              <MdOutlineHome size={22} />
              <span className="text-sm none hidden lg:block">Home</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2 p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <FaRegUser size={19} />
              <span className="text-sm hidden lg:block">Profile</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-5 list">
          <span className="uppercase text-[13px] text-gray-400 hidden lg:block">
            List
          </span>
          <div className="ml-1">
            <NavLink
              to={"/users"}
              className="flex items-center gap-2  p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <FaRegUser size={19} />
              <span className="text-sm hidden lg:block">Users</span>
            </NavLink>
            <NavLink
              to={"/products"}
              className="flex items-center gap-1   p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <IoCartOutline size={22} />
              <span className="text-sm hidden lg:block">Products</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2  p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <FaRegPaste size={18} />
              <span className="text-sm hidden lg:block">Orders</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2   p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <TfiWrite size={18} />
              <span className="text-sm hidden lg:block">Posts</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-5 general">
          <span className="uppercase text-[13px] text-gray-400 ">General</span>
          <div className="ml-1">
            <NavLink
              to={""}
              className="flex items-center gap-2  p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <AiOutlineProduct size={19} />
              <span className="text-sm hidden lg:block">Elements</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2   p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <SlNote size={18} />
              <span className="text-sm hidden lg:block">Notes</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2  p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <CgFormatLeft size={19} />
              <span className="text-sm hidden lg:block">Forms</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2   p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <FaRegCalendarAlt size={18} />
              <span className="text-sm hidden lg:block">Calender</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-2 maintenance">
          <span className="uppercase text-[13px] text-gray-400 hidden lg:block">
            Maintenance
          </span>
          <div className="ml-1">
            <NavLink
              to={"/"}
              className={
                "flex items-center gap-2 p-2 hover:bg-slate-700 hover:rounded-md"
              }
            >
              <IoSettingsOutline size={22} />
              <span className="text-sm hidden lg:block">Setting</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2 p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <MdOutlineBackup size={19} />
              <span className="text-sm hidden lg:block">Backups</span>
            </NavLink>
          </div>
        </div>
        <div className="mt-2 activity">
          <span className="uppercase text-[13px] text-gray-400 hidden lg:block">
            Activity
          </span>
          <div className="ml-1">
            <NavLink
              to={"/"}
              className={
                "flex items-center gap-2 p-2 hover:bg-slate-700 hover:rounded-md"
              }
            >
              <IoStatsChartSharp size={22} />
              <span className="text-sm hidden lg:block">Charts</span>
            </NavLink>
            <NavLink
              to={""}
              className="flex items-center gap-2 p-2 hover:bg-slate-700 hover:rounded-md"
            >
              <LuLogIn size={19} />
              <span className="text-sm hidden lg:block">Logs</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
