import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Card } from '../common/Card';

import { Container, FlexWrapper } from "../common/styles/index";
import Slider from '../slider/Slider';
import heroSliderData from '../../assets/fake-data/data-slider';
import liveAuctionData from '../../assets/fake-data/data-live-auction';
import LiveAuction from '../common/LiveAuction';

export interface HomeProps {} const HomePage = (props:HomeProps) => {

    const {loading, market} :any = useSelector((state) => state);
    
    return (
      <div>
        <h2>HomePage</h2>
        <Container>
            <FlexWrapper>
              {!loading && market !== null ? market.map(({id, image_url}) => (
                      <Card id={id} src={image_url}/>
                  )) : 'Loading... ' }
            </FlexWrapper>
            <Slider data={heroSliderData} />
            <LiveAuction data={liveAuctionData} />
            {/* <TopSeller data={topSellerData} />
            <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} />
            <Create /> */}
        </Container>
      </div>
    );
  }

export default HomePage;