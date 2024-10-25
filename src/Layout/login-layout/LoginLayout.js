// HomeLayout.js
import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <header>
        <h1>Header LoginLayout</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>Footer LoginLayout</p>
      </footer>
    </div>
  );
};

export default LoginLayout;
