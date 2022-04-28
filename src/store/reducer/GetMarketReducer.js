import { combineReducers } from "redux";
import MarketReducer from "./MarketReducer";

const reducers = combineReducers({
  Test: MarketReducer
});

export default reducers;