import React, {Component} from "react";
import {Router} from "@reach/router";
import {Provider} from "mobx-react";
import {store} from "./stores/store";
import {AboutPage} from "./pages/AboutPage";
import {TopMoviesPage} from "./pages/TopMoviesPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";
import {MainPage} from "./pages/MainPage";
import {MasterLayout} from "./layouts/MasterLayout";
import {ResponsivePage} from "./pages/ResponsivePage";

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Provider {...store}>
        <MasterLayout>
          <Router>
            <MainPage path="/">React app</MainPage>
            <MovieDetailsPage path="/movie/:id">Movies</MovieDetailsPage>
            <TopMoviesPage path="/movies">Details</TopMoviesPage>
            <AboutPage path="/about">Details</AboutPage>
            <ResponsivePage path="/responsive">Responsive</ResponsivePage>
          </Router>
        </MasterLayout>
      </Provider>

    );
  }
}

export {App}