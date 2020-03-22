import {Fragment} from "inferno";
import {Header} from "../controls/Header";
import {Footer} from "../controls/Footer";
import {Modal} from "../controls/Modal";

const MasterLayout = props => (
  <Fragment>
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
    <Modal/>
  </Fragment>
);

export {MasterLayout}