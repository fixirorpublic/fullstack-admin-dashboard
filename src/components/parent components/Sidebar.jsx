/** @format */

import React from "react";
import NavPageDekstop from "../primary/dekstop/NavPageDesktop";
import NavPageTablet from "../primary/tablet/NavPageTablet";
import NavPageMobile from "../primary/mobile/NavPageMobile";

const Sidebar = () => {
  return (
    <div>
      <div className='max-[1170px]:hidden'>
        <NavPageDekstop />
      </div>
      <div className='min-[1100px]:hidden max-[640px]:hidden'>
        <NavPageTablet />
      </div>
      <div className='min-[640px]:hidden'>
        <NavPageMobile />
      </div>
    </div>
  );
};

export default Sidebar;
