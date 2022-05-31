import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Container, Card } from "../commonComponents";

export interface HomeProps {} const HomePage = (props:HomeProps) => {
    const data:any = useSelector((state) => state);

    let nftCards = '';

    const loadedStatus = data.isLoading;

    if (loadedStatus === false && data.market != null) {  
      nftCards = data.market.map((nftCard:any) => {
        return (
          <Card>
            <img src={nftCard.image_url} alt="" />
            <span>ID {nftCard.id}</span>
          </Card>
        );
      });
    }

    return (
      <div>
        <h2>HomePage</h2>
        <Container>
          {nftCards}
        </Container>
      </div>
    );
  }

export default HomePage;