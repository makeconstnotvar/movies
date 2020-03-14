import {render} from 'react-dom';
import React from "react";
import {App} from "App";
import moment from "moment";

moment.locale("ru");

render(<App/>, document.querySelector('#root'));