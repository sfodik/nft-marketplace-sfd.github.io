import axios from 'axios';
import { GET_MARKET, SET_LOADING } from './ActionTypes';

export const getAssets = (payload: any) => ({type: GET_MARKET, payload})
export const setLoading = (payload: any) => ({type: SET_LOADING, payload})

export const getMarket = () => {
  return (dispatch: any) => {
    dispatch(setLoading(true))
    const fetchNFTData = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x5A027A1F234a9499a8eAf308a9d318794633d2A8&order_direction=asc');
      dispatch(getAssets(openseaData.data.assets))
      dispatch(setLoading(false))
    }    
    return fetchNFTData();
  };
};