import {Component} from "react";
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes, RoutesMap} from './routes';
import {AboutPage} from "pages/AboutPage";
import {MoviesTopPage} from "pages/MoviesTopPage";
import {MovieDetailsPage} from "pages/MovieDetailsPage";
import {MainPage} from "pages/MainPage";
import {MasterLayout} from "layouts/MasterLayout";
import {ResponsivePage} from "pages/ResponsivePage";

class Routes extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <BrowserRouter>
        <MasterLayout>
          <Switch>
            {
              routes.map((route, i) => <RoutesMap {...route}/>)
            }
          </Switch>
        </MasterLayout>
      </BrowserRouter>
    );
  }
}

export {Routes}