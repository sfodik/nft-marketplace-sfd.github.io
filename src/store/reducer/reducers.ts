import { combineReducers } from "redux";
import MarketReducer from "./MerketReducer";

const reducers = combineReducers({
  market: MarketReducer
});

export default reducers;