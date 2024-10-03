import React from "react";
import { SiPhpmyadmin } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
function Navbar() {
  return (
    <>
      <div className="navbar flex justify-between">
        <div className="logo flex items-center cursor-pointer">
          <SiPhpmyadmin size={32} color="tomato" />
          <h2 className="font-semibold text-[#0EADC6] text-md">Dashboard</h2>
        </div>
        <div className="icons flex gap-2 md:gap-5 items-center">
          <BsSearch size={20} className="cursor-pointer " />
          <AiOutlineProduct size={20} className="cursor-pointer " />
          <FaRegSquare size={20} className="cursor-pointer " />
          <IoMdNotificationsOutline
            size={20}
            className="cursor-pointer hidden md:block"
          />
          <FaRegUser size={20} className="cursor-pointer " />
          <IoSettingsOutline size={20} className="cursor-pointer " />
        </div>
      </div>
    </>
  );
}

export default Navbar;
