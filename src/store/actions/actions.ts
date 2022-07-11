import axios from 'axios';
import { GET_MARKET_SUCCESS, GET_MARKET_PENDING, GET_MARKET_ERROR } from './ActionTypes';

const getMarketAPI = 'https://testnets-api.opensea.io/assets?asset_contract_address=0x5A027A1F234a9499a8eAf308a9d318794633d2A8&order_direction=asc'

export type AsyncTypes = {
  pending: string;
  complete: string;
  error: string;
}

const asyncActionCreator = (asyncTypes: AsyncTypes, promise: Promise<any>) => (...args: any[]) => {
  return (dispatch: (arg0: any) => Promise<any>) => {
    dispatch({ type: asyncTypes.pending })
    return promise
        .then((payload: any) => dispatch({
          type: asyncTypes.complete,
          payload: payload.data,
        }))
        .catch((err: string) => dispatch({
          type: asyncTypes.error,
          error: true,
          payload: err,
        }))
  }
}

export const getMarket = asyncActionCreator({
  pending: GET_MARKET_PENDING,
  complete: GET_MARKET_SUCCESS,
  error: GET_MARKET_ERROR
}, axios.get(getMarketAPI))
