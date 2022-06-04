import { GET_MARKET, SET_LOADING } from '../actions/ActionTypes'

const initialState = {
  market: null,
  isLoading: false
};

export default function MarketReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_MARKET:
      return {
        ...state,
        market: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}