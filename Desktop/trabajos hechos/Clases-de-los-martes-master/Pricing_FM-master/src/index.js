import React from "react";
import ReactDOM from "react-dom";
import css from "../src/Components/styles/general.css"

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./routes/App"

ReactDOM.render(
<App />, 
document.getElementById("root")
);