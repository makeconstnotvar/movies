import React, {Fragment} from "react";
import {Link} from "@reach/router";
import {AboutPage} from "../pages/AboutPage";

const Header = props => (
  <Fragment>
    <div>Header</div>
    <div>
      <Link to="/">Main</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/about">About</Link>
      <Link to="/responsive">Responsive</Link>
    </div>
  </Fragment>
);

export {Header}