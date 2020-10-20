import React from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

import Gateway from "./components/gateway.js";
import Nav from "./components/nav.js";
import Library from "./components/library.js";

//jquery functions
$(document).ready(() => {
  $("#gatewayButton").on("click", () => {
    $("#gatewayContainer").fadeOut(1000, () => {
      $("#libraryContainer, #navContainer").fadeIn(1000, () => {
        $(".book-cover, #leaveText").fadeIn(1000);
      });
    });
  });

  $("#leaveLibraryButton").on("click", () => {
    $(".book-cover, #leaveText").fadeOut(1000, () => {
      $("#libraryContainer, #navContainer").fadeOut(1000, () => {
        $("#gatewayContainer").fadeIn(1000);
      });
    });
  });
});

function App() {
  return (
    <div id="masterContainer">
      <Gateway />
      <Nav />
      <Library />
    </div>
  );
}

export default App;
