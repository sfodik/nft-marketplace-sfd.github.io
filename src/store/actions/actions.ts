import { GET_MARKET } from './ActionTypes';

export const getAssets = (payload: any) => ({type: GET_MARKET, payload})

export const getMarket = () => {
  return (dispatch: any) => {
    fetch(`https://testnets-api.opensea.io/assets?asset_contract_address=0x5A027A1F234a9499a8eAf308a9d318794633d2A8&order_direction=asc`, {
        method: "GET",
        mode: "no-cors"
      }, 
    ) 
      .then((response) => response.json())
      .then((result) =>
        dispatch(getAssets(result))
      );
  };
};