import React, {Fragment} from "react";
import {Link} from "@reach/router";
import {AboutPage} from "../pages/AboutPage";

const Header = props => (
  <div className="header">
    <div className="container header-logo fs-32">Header</div>
    <div className="container">
      <Link className="header-link" to="/">Main</Link>
      <Link className="header-link" to="/movies">Movies</Link>
      <Link className="header-link" to="/about">About</Link>
      <Link className="header-link" to="/responsive">Responsive</Link>
    </div>
  </div>
);

export {Header}