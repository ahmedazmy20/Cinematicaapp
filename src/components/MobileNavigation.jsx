import React from "react";
import { mobileNavigation } from "../contants/navigation";
import { NavLink } from "react-router-dom";

function MobileNavigation() {
  return (
    <>
      <section className="sm:hidden h-12 bg-neutral-900 bg-opacity-75 backdrop-blur-md fixed bottom-0 w-full z-10">
        <div className="flex items-center justify-between px-2 py-2 h-full text-neutral-400  ">
          {mobileNavigation.map((nav,index) => {
            return (
              <NavLink  key={nav.lable + "mobileNavigation" || index}  to={nav.href} className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center hover:text-amber-500 duration-500 ${isActive && 'text-amber-500'}`}>
                <div className="text-2xl">{nav.icon}</div>
                <p className="text-sm">{nav.lable}</p>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MobileNavigation;
