import ReactDOMServer from 'react-dom/server';
import React from "react";
import {Routes} from "./Routes";
import {StaticRouter, match} from "react-router";
import {Provider} from "mobx-react";
import {getStores} from "./stores/store";
import {fetchData} from "./fetch";

async function render(req) {
  let stores = getStores({});
  const match = Match("/movie/278");
  console.log(match);
  let app = (
    <StaticRouter location={'/movie/278'}>
      <Provider {...stores}>
        <Routes/>
      </Provider>
    </StaticRouter>
  );

  //await fetchData(stores, components, params, query);

  return {
    html: ReactDOMServer.renderToString(app),
    stores
  };

}

export {render}