import React, {Component, Fragment} from "react";

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Main Page</h1>
        <div className="container">Проверка container</div>
        <hr/>
        <div className="container">
          <div className="show-desktop">show-desktop</div>
          <div className="show-tablet">show-tablet</div>
          <div className="show-mobile">show-mobile</div>
          <div className="show-micro">show-micro</div>
        </div>
        <hr/>
        <div className="container">
          <div className="hide-desktop">hide-desktop</div>
          <div className="hide-tablet">hide-tablet</div>
          <div className="hide-mobile">hide-mobile</div>
          <div className="hide-micro">hide-micro</div>
        </div>
      </Fragment>
    );
  }
}

export {MainPage}