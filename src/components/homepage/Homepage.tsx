import { useSelector } from "react-redux";
import Card from '../common/Card';

import { Container, FlexWrapper } from "../common/styles/index";
import Slider from '../slider/Slider';
import heroSliderData from '../../assets/fake-data/data-slider';
import liveAuctionData from '../../assets/fake-data/data-live-auction';
import todayPickData from '../../assets/fake-data/data-today-pick';
import LiveAuction from '../common/LiveAuction';
import TodayPicks from '../common/TodayPicks';

export interface HomeProps {} const HomePage = (props:HomeProps) => {

    const {loading, market} :any = useSelector((state) => state);

    return (
      <div>
        <h2>HomePage</h2>
        <Container>
            <FlexWrapper className="m-first-section">
              {!loading && market !== null ? market.map((item,index) => (
                      <Card key={index} item={item} />
                  )) : 'Loading... ' }
            </FlexWrapper>
            <Slider data={heroSliderData} />
            <LiveAuction data={liveAuctionData} />
            <TodayPicks data={todayPickData} />
        </Container>
      </div>
    );
  }

export default HomePage;