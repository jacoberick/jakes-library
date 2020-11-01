import React from "react";
import { Link } from "react-router-dom";

const Gateway = ({ nodeRef }) => {
  return (
    <div className="gateway--container" ref={nodeRef}>
      <Link to="/library" id="gatewayButton">
        Enter the library.
      </Link>
    </div>
  );
};

export default Gateway;
