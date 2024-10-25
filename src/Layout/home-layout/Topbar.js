import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobieDrawer from "./Drawer";
import { Container } from "@mui/material";
import { navbarData } from "../../json/JsonData";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="main-navbar">
      <Container>
        <div className="main-header">
          <div className="topbar-left">
            <a href="/" className="logo">
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="middle-menu">
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

          <div className="mobile-icon">
            <div className="icon-btn">
              <IoMdMenu onClick={() => setOpen(true)} />
            </div>
          </div>
        </div>
      </Container>
      <div className={open ? "navbar-sidebar-active" : "navbar-sidebar"}>
        {open && <MobieDrawer setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Topbar;
