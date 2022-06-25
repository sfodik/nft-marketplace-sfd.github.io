import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card } from '../common/Card';

import { Container } from "../common/styles/index";

export interface HomeProps {} const HomePage = (props:HomeProps) => {
    const {loading, market} :any = useSelector((state) => state);
    
    return (
      <div>
        <h2>HomePage</h2>
        <Container>
          {!loading && market !== null ? market.map(({id, image_url}) => (
                  <Card id={id} src={image_url}/>
              )) : 'Loading... ' }
        </Container>
      </div>
    );
  }

export default HomePage;