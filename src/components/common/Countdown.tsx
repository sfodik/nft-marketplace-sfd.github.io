import { FeaturedCountdown } from '../card/styles/index';
import Countdown from "react-countdown";

const CardCountdown = data => {

    return (
        <FeaturedCountdown className="featured-countdown">
            <span className="slogan"></span>
            <Countdown date={Date.now() + 500000000}>
                <span>You are good to go!</span>
            </Countdown>
        </FeaturedCountdown>
    )
}

export default CardCountdown;