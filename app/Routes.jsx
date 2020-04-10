import {Component} from "react";
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes, RoutesMap} from './routes';
import {MasterLayout} from "layouts/MasterLayout";

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
              routes.map((route, i) => <RoutesMap key={i} {...route}/>)
            }
          </Switch>
        </MasterLayout>
      </BrowserRouter>
    );
  }
}

export {Routes}