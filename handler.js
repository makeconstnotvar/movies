import isDev from 'isdev';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {Provider} from 'mobx-react';
import {dehydrate} from '~/src/state/hydrate';
import {fetchData} from '~/src/utils/fetch';
import {Dir} from '~/src/config';
import routes from '~/src/routes';
import initStore from '~/stores';

function handleRouter(req, res, props) {
  const index = path.join(Dir.src, 'index');
  const {components, params, location} = props;

  /*
    Initialize the store injecting the needed
    Initial State to pass on the client-side
  */
  const store = initStore({
    app: {ssrLocation: req.url},
  });

  /*
    Fetch data from the Components
  */
  fetchData(store, components, params, location.query)
    .then(() => renderToString(
      <Provider store={store}>
        <RouterContext {...props} />
      </Provider>
    ))
    /*
      Render the html with dehydrate store
    */
    .then((html) => res
      .status(200)
      .render(index, {
        title: 'Title',
        build: isDev ? null : '/build',
        root: html,
        state: dehydrate(store),
      }));
}