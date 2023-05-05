/** @format */

import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiTwotonePieChart } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiRobotGolem } from "react-icons/gi";
import { MdSettingsInputComposite } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

import { Link } from "react-router-dom";

const NavPageTablet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      link: "/",
      icon: MdOutlineDashboardCustomize,
    },
    {
      name: "Performa",
      link: "/",
      icon: AiTwotonePieChart,
    },
    {
      name: "Karyawan",
      link: "/",
      icon: FaUsers,
    },
    {
      name: "Administrator",
      link: "/",
      icon: MdAdminPanelSettings,
    },
    {
      name: "Ruang AI",
      link: "/",
      icon: GiRobotGolem,
    },
    {
      name: "Maintenance",
      link: "/",
      icon: MdSettingsInputComposite,
    },
  ];

  return (
    <section>
      <div className={`${isOpen ? "w-[230px]" : "w-20"} flex flex-col  duration-500 h-screen bg-slate-900 overflow-y-scroll`}>
        <div className='flex flex-col mt-[6rem] gap-4 relative '>
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i} className='flex items-center text-sm text-white gap-3.5 font-[Arvo] font-semibold p-2 w-[200px] ml-2 px-5 rounded-md hover:bg-[#48D1CC] hover:text-black'>
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!isOpen && "opacity-0 translate-x-28 hover:bg-none overflow-hidden"}`}>
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className={`flex mt-8 px-2 py-3 text-white active:text-white justify-end ${!isOpen && "rotate-90"}`}>
          <CgMenuGridO className='w-6 h-6' />
        </button>
      </div>
    </section>
  );
};

export default NavPageTablet;
