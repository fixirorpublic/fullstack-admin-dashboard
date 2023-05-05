/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiTwotonePieChart } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiRobotGolem } from "react-icons/gi";
import { MdSettingsInputComposite } from "react-icons/md";

const NavPageDekstop = () => {
  return (
    <section>
      <div className='flex flex-col w-[280px] h-screen bg-gray-900 overflow-y-scroll'>
        <div className='flex text-white text-2xl py-[3rem] px-[3rem] font-[Poppins] '>FIXIROR</div>
        <div className='flex flex-col space-y-5 mt-[1rem]'>
          <Link to='/'>
            <button className='flex gap-3 text-white text-center px-[1rem] hover:bg-blue-800 ml-8 w-[200px] h-[40px] rounded-xl items-center hover:scale-110'>
              <MdOutlineDashboardCustomize className='w-8 h-8' />
              <span className='text-md text-center font-[Arvo]'>Dashboard</span>
            </button>
          </Link>
          <Link to='/'>
            <button className='flex gap-3 text-white text-center px-[1rem] hover:bg-blue-800 ml-8 w-[200px] h-[40px] rounded-xl items-center hover:scale-110'>
              <AiTwotonePieChart className='w-8 h-8' />
              <span className='text-md text-center font-[Arvo]'>Performa</span>
            </button>
          </Link>
          <Link to='/'>
            <button className='flex gap-3 text-white text-center px-[1rem] hover:bg-blue-800 ml-8 w-[200px] h-[40px] rounded-xl items-center hover:scale-110'>
              <FaUsers className='w-8 h-8' />
              <span className='text-md text-center font-[Arvo]'>Karyawan</span>
            </button>
          </Link>
          <Link to='/'>
            <button className='flex gap-3 text-white text-center px-[1rem] hover:bg-blue-800 ml-8 w-[200px] h-[40px] rounded-xl items-center hover:scale-110'>
              <MdAdminPanelSettings className='w-8 h-8' />
              <span className='text-md text-center font-[Arvo]'>Administrator</span>
            </button>
          </Link>
          <Link to='/'>
            <button className='flex gap-3 text-white text-center px-[1rem] hover:bg-blue-800 ml-8 w-[200px] h-[40px] rounded-xl items-center hover:scale-110'>
              <GiRobotGolem className='w-8 h-8' />
              <span className='text-md text-center font-[Arvo]'>Ruang AI</span>
            </button>
          </Link>
          <Link to='/'>
            <button className='flex gap-3 text-white text-center px-[1rem] hover:bg-blue-800 ml-8 w-[200px] h-[40px] rounded-xl items-center hover:scale-110'>
              <MdSettingsInputComposite className='w-8 h-8' />
              <span className='text-md text-center font-[Arvo]'>Maintenance</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavPageDekstop;
