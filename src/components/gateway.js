import React from "react";
import { Link } from "react-router-dom";

const Gateway = () => {
  return (
    <div id="gatewayContainer">
      <Link to="/library" id="gatewayButton">
        Enter the library.
      </Link>
    </div>
  );
};

export default Gateway;
