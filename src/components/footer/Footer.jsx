import React from "react";
import { SiPhpmyadmin } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="flex flex-wrap md:justify-between items-center pb-2">
        <div className="logo flex items-center cursor-pointer">
          <SiPhpmyadmin size={25} color="tomato" />
          <h2 className="font-semibold text-[#0EADC6] text-md">Dashboard</h2>
        </div>
        <div>
          <p className="text-[.8rem] text-gray-400 md:mr-5">
            ©Admin Dashboard all reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
