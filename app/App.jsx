import {Component} from "react";
import React from 'react';
import {Router} from "@reach/router";
import {Provider} from "mobx-react";
import {getStores} from "stores/store";
import {AboutPage} from "pages/AboutPage";
import {MoviesTopPage} from "pages/MoviesTopPage";
import {MovieDetailsPage} from "pages/MovieDetailsPage";
import {MainPage} from "pages/MainPage";
import {MasterLayout} from "layouts/MasterLayout";
import {ResponsivePage} from "pages/ResponsivePage";

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Provider {...getStores()}>
        <Router component={MasterLayout} primary={false}>
          <MainPage exact path="/"/>
          <MovieDetailsPage path="/movie/:id"/>
          <MoviesTopPage path="/movies/top"/>
          <AboutPage path="/about"/>
          <ResponsivePage path="/responsive"/>
        </Router>
      </Provider>
    );
  }
}

export {App}