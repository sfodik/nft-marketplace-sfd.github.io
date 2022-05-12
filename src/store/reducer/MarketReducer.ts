import { combineReducers } from "redux";
import MarketReducer from "./index";

const reducers = combineReducers({
  Test: MarketReducer
});

export default reducers;