import { combineReducers } from "redux";
import counter from './counter.js'

const allReducers = combineReducers({
    counter,
});
export default allReducers;