import React, {Fragment} from "react";
import {Header} from "../controls/Header";
import {Footer} from "../controls/Footer";
import {Modal} from "../controls/Modal";

const MasterLayout = props => (
  <Fragment>
    <Header/>
    <div>Мастер</div>
    <div>
      {props.children}
    </div>
    <Footer/>
    <Modal/>
  </Fragment>
);

export {MasterLayout}