import React from 'react';
import {render} from 'react-dom';
import {App} from "App";
import moment from "moment";

moment.locale("ru");

render(<App/>, document.querySelector('#root'));