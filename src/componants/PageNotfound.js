import React from "react";
import { NavLink } from "react-router-dom";

const PageNotfound = () => {
  return (
    <div className="page-not-found">
      <div className="error-img">
        <img src="images/error-img.png" alt="img" />
      </div>
      <div className="error-content">
        <h6>Page not found please go back home page.</h6>
        <NavLink to={"/"}>
          <button>Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotfound;
