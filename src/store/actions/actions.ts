import { GET_MARKET } from './ActionTypes';

export const getAssets = (payload: any) => ({type: GET_MARKET, payload})

export const getMarket = () => {
  return (dispatch: any) => {
    fetch(`https://testnets-api.opensea.io/assets?asset_contract_address=0x646B56b7775e357DA5c35Cd2f8441Bb6aC0EDce1&format=json&order_direction=asc`)
      .then((response) => response.json())
      .then((result) =>
        dispatch(getAssets(result))
      );
  };
};