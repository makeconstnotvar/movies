import ReactDOMServer from 'react-dom/server';
import React from "react";
import {App} from "./App";

function render() {
  return ReactDOMServer.renderToString(<App/>);
}

export {render}