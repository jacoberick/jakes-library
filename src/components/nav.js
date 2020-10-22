import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="navContainer">
      <Link to="/" id="leaveLibraryButton">
        Leave the library
      </Link>
    </div>
  );
};

export default Nav;
