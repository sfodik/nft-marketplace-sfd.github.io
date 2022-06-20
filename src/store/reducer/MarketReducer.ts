import { GET_MARKET_SUCCESS, GET_MARKET_PENDING, GET_MARKET_ERROR } from '../actions/ActionTypes'

const initialState = {
  market: null,
  loading: false,
  error: null
};

export default function MarketReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_MARKET_SUCCESS:
      return {
        ...state,
        market: action.payload.assets,
        loading: false
      };
    case GET_MARKET_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_MARKET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}