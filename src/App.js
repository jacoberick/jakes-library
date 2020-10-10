import React from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

import Gateway from "./components/gateway.js";
import Library from "./components/library.js";

//jquery functions
$(document).ready(() => {
  $("#gatewayButton").on("click", () => {
    $("#gatewayContainer").fadeOut(2000, () => {
      $("#libraryContainer").fadeIn(4000);
    });
  });
});

function App() {
  return (
    <div id="masterContainer">
      <Gateway />
      <Library />
    </div>
  );
}

export default App;
