import {render} from 'inferno';
import {App} from "App";
import moment from "moment";

moment.locale("ru");

render(<App/>, document.querySelector('#root'));