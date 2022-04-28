export const getMarket = () => {
  return (dispatch) => {
    fetch(`https://testnets-api.opensea.io/api/v1/assets`)
      .then((response) => response.json())
      .then((result) =>
        dispatch({ type: "GET_MARKET", payload: result })
      );
  };
};