// HomeLayout.js
import React from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <header>
        <Topbar />
      </header>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
