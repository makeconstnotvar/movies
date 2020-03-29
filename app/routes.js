import {MainPage} from "./pages/MainPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";
import {MoviesTopPage} from "./pages/MoviesTopPage";
import {AboutPage} from "./pages/AboutPage";
import {ResponsivePage} from "./pages/ResponsivePage";
import {Route} from "react-router-dom";
import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainPage
  },
  {
    path: "/movie/:id",
    component: MovieDetailsPage,
  },
  {
    path: "/movies/top",
    component: MoviesTopPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/responsive",
    component: ResponsivePage,
  }
];

const RoutesMap = route => <Route path={route.path} exact={route.exact} component={route.component} routes={route.routes}/>;

export {routes, RoutesMap}