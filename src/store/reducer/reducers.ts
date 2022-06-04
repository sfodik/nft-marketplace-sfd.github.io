import { combineReducers } from "redux";
import MarketReducer from "./MarketReducer";

const reducers = combineReducers({
  market: MarketReducer
});

export default reducers;