import React from "react";
import { Link } from "react-router-dom";

const ExitButton = ({ text, path }) => {
  return (
    <div id="navContainer">
      <Link to={`/${path}`} id="leaveLibraryButton">
        {text}
      </Link>
    </div>
  );
};

export default ExitButton;
