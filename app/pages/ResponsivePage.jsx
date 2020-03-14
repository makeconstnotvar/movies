import React, {Component, Fragment} from "react";

class ResponsivePage extends Component {
  el = null;

  componentDidMount() {
    this.el = document.getElementById("width");
    this.el.innerText = window.innerWidth
    window.addEventListener('resize', this.onWindowResize);
  }

  onWindowResize = e => {
    this.el.innerText = e.currentTarget.innerWidth
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  render() {
    return (
      <div id="responsive-page" className="container">
        <h1>Responsive Page</h1>
        <p>width: <span id="width"/>px</p>
        <table className="media-box">
          <tbody>
          <tr>
            <td className="media-row">
              <div className="media-size fs-12">1440px 1280px</div>
              <div className="media-title fs-20">Desktop</div>
              <div className="media-size fs-12">1001px</div>
            </td>
          </tr>
          <tr>
            <td className="media-row">
              <div className="media-size fs-12">1000px</div>
              <div className="media-title fs-20">Tablet</div>
              <div className="media-size fs-12">751px</div>
            </td>
          </tr>
          <tr>
            <td className="media-row">
              <div className="media-size fs-12">750px</div>
              <div className="media-title fs-20">Mobile</div>
              <div className="media-size fs-12">551px</div>
            </td>
          </tr>
          <tr>
            <td className="media-row">
              <div className="media-size fs-12">500px</div>
              <div className="media-title fs-20">Micro</div>
              <div className="media-size fs-12">0px</div>
            </td>
          </tr>
          </tbody>
        </table>
        <h3>Show</h3>
        <div className="responsive-demo-box">
          <div className="show-desktop">show-desktop</div>
          <div className="show-tablet">show-tablet</div>
          <div className="show-mobile">show-mobile</div>
          <div className="show-micro">show-micro</div>
        </div>
        <h3>Hide</h3>
        <div className="responsive-demo-box">
          <div className="hide-desktop">hide-desktop</div>
          <div className="hide-tablet">hide-tablet</div>
          <div className="hide-mobile">hide-mobile</div>
          <div className="hide-micro">hide-micro</div>
        </div>
        <h3>Show UP</h3>
        <div className="responsive-demo-box">
          <div className="show-desktop">show-desktop-up (show-desktop)</div>
          <div className="show-tablet-up">show-tablet-up</div>
          <div className="show-mobile-up">show-mobile-up</div>
          <div className="show">show-micro-up (show)</div>
        </div>
        <h3>Show DOWN</h3>
        <div className="responsive-demo-box">
          <div className="show">show-desktop-down (show)</div>
          <div className="show-tablet-down">show-tablet-down</div>
          <div className="show-mobile-down">show-mobile-down</div>
          <div className="show-micro">show-micro-down (show-micro)</div>
        </div>
        <h3>Hide UP</h3>
        <div className="responsive-demo-box">
          <div className="hide-desktop">hide-desktop-up (hide-desktop)</div>
          <div className="hide-tablet-up">hide-tablet-up</div>
          <div className="hide-mobile-up">hide-mobile-up</div>
          <div className="hide">hide-micro-up (hide)</div>
        </div>
        <h3>Hide DOWN</h3>
        <div className="responsive-demo-box">
          <div className="hide">hide-desktop-down (hide)</div>
          <div className="hide-tablet-down">hide-tablet-down</div>
          <div className="hide-mobile-down">hide-mobile-down</div>
          <div className="hide-micro">hide-micro-down (hide-micro)</div>
        </div>
      </div>
    );
  }
}

export {ResponsivePage}