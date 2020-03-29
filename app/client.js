import React from 'react';
import {hydrate, render} from 'react-dom';
import {Routes} from "Routes";
import moment from "moment";
import {fetchDataOnLocationMatch} from "./fetch";
import {Provider} from "mobx-react";
import {getStores} from "./stores/store";

moment.locale("ru");

const stores = getStores(window.STORES || {});

//fetchDataOnLocationMatch(browserHistory, routes, match, store);

render(<Provider {...stores}><Routes/></Provider>, document.querySelector('#root'));