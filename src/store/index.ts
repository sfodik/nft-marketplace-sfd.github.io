import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer/MerketReducer";

import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = compose(applyMiddleware(thunk), composeWithDevTools())

const store = createStore(reducers, composedEnhancer);

export default store;