export function fetchData(store, components, params, query) {
  return Promise.all(components
    .filter(component => component && (component.fetchData instanceof Function))
    .map((component) => component.fetchData
      ? component.fetchData({store, params, query})
      : false));
}

export function fetchDataOnLocationMatch(history, routes, match, store) {
  let ssrLocation = store.app.ssrLocation;
  history.listen((e) => {
    if (e.pathname !== ssrLocation) {
      match({routes, location: e.pathname}, (error, redirect, props) => {
        if (props) fetchData(store, props.components, props.params, props.location.query);
      });
    }
    // enable subsequent fetches
    ssrLocation = false;
  });
}