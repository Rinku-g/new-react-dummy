import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { navbarData } from "../../json/JsonData";
import { NavLink } from "react-router-dom";

const MobieDrawer = ({ setOpen }) => {
  return (
    <div className="main-moble-drawer">
      <div className="close-icon">
        <IoCloseSharp onClick={() => setOpen(false)} />
      </div>
      <div className="drawer-header">
        <NavLink to="#">Logo</NavLink>
      </div>
      <div className="drawer-body">
        <ul>
          {navbarData &&
            navbarData?.map((items, index) => {
              const { title, path } = items;
              return (
                <li key={index}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MobieDrawer;
