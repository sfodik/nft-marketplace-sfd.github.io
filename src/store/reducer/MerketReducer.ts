import { GET_MARKET } from '../actions/ActionTypes'

const initialState = {
  market: null,
};

export default function MarketReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_MARKET:
      return {
        ...state,
        market: action.payload,
      };
    default:
      return state;
  }
}