import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";
import CardModal from './CardModal'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styled from 'styled-components';
import { CardBtn, CardProduct, FlexRow, ThemesflatContainer, TitleH2, TitleH5 } from './styles';

const LiveAuctions = styled.div`
    padding: 50px 0;
    .swiper-button-next, .swiper-button-prev {
        position: absolute;
        bottom: -8px;
        opacity: 1;
        top: auto;
        z-index: 11;
        &:after {
            font-family: 'Font Awesome 5 Pro';
            font-size: 20px;
            content: "\f060";
            color: white;
            font-weight: bold;
        }
    }
    .swiper-button-prev {
        left: 44.5%;
        &:after {
            content: "\f060";
        }
    }
    .swiper-button-next {
        right: 43.8%;
        &:after {
            content: "\f061";
        }
    }
    .swiper-pagination-bullets {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        justify-items: center;
        padding-left: 15px;
    }
    .swiper-pagination-bullet {
        margin: 0 11px 0 5px !important;
        border: 1px solid #ffffff;
        background: transparent;
        width: 8px;
        height: 8px;
        position: relative;
        opacity: 1;
        &.swiper-pagination-bullet-active {
            position: relative;
            background: #ffffff;
            &:before {
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                border-radius: 50%;
                content: "";
                width: 16px;
                height: 16px;
                border: 1px solid #ffffff;
                overflow: visible;
            }
        }
    }
`;

const ButtonPlaceBid = styled.div`
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0;
    transition: all 0.4s ease;
`;

const CardMedia = styled.div`
    position: relative;
    margin-bottom: 21px;
    box-sizing: 20px;
    border-radius: 20px;
    overflow: hidden;
    img {
        width: 100%;
        transition: all 0.4s ease;
    }
`;

const FeaturedCountdown = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 23px;
    text-transform: uppercase;
    padding: 0;
    border-radius: 13px;
    background-color: #343444;
    height: 36px;
    width: 151px;
    .slogan {
        margin-right: 20px;
        &:before {
            font-family: 'nfts';
            color: #5b6afa;
            font-size: 20px;
        }
    }
    span:last-child {
        color: white;
    }
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const Tags = styled.div`
    width: 49px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    background-color: #5142fc;
    border-radius: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

const MetaInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
    .author {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .price {
        text-align: right;
        color: white;
        span {
            color: #8a8aa0;
            font-size: 13px;
            line-height: 21px;
        }
    }
    .avatar {
        width: 44px;
        height: 44px;
        border-radius: 15px;
        overflow: hidden;
        margin-right: 12px;
        flex-shrink: 0;
    }
    .info span {
        color: #8a8aa0;
        font-size: 13px;
        line-height: 21px;
    }
    h6 {
        line-height: 22px;
        font-weight: 700;
        text-rendering: optimizeLegibility;
        font-size: 15px;
        color: white;
        a {
            text-decoration: none;
            color: var(--primary-color2);
            transition: all 0.3s ease-in-out;
            letter-spacing: 0.1px;
        }
    }
`;


const LiveAuction = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <LiveAuctions className="tf-section live-auctions">
                <ThemesflatContainer className="themesflat-container ">
                        <FlexRow className="heading-live-auctions">
                            <TitleH2 className="tf-title pb-20">
                                Live Auctions</TitleH2>
                            <Link to="/explore-03" className="exp">EXPLORE MORE</Link>
                        </FlexRow>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                767: {
                                slidesPerView: 2,
                                },
                                991: {
                                slidesPerView: 3,
                                },
                                1300: {
                                    slidesPerView: 4,
                                },
                            }}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                                {
                                    data.slice(0,7).map((item,index) => (
                                        <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                                <CardProduct className="sc-card-product">
                                                                    <CardMedia className="card-media">
                                                                        <Link to="/item-details-01"><img src={item.img} alt="axies" /></Link>
                                                                        <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                                                                        <FeaturedCountdown className="featured-countdown">
                                                                            <span className="slogan"></span>
                                                                            <Countdown date={Date.now() + 500000000}>
                                                                                <span>You are good to go!</span>
                                                                            </Countdown>
                                                                        </FeaturedCountdown>
                                                                        <ButtonPlaceBid className="button-place-bid">
                                                                            <CardBtn onClick={() => setModalShow(true)} className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></CardBtn>
                                                                        </ButtonPlaceBid>
                                                                    </CardMedia>
                                                                    <CardTitle className="card-title">
                                                                        <TitleH5><Link to="/item-details-01">"{item.title}"</Link></TitleH5>
                                                                        <Tags className="tags">{item.tags}</Tags>
                                                                    </CardTitle>
                                                                    <MetaInfo className="meta-info">
                                                                        <div className="author">
                                                                            <div className="avatar">
                                                                                <img src={item.imgAuthor} alt="axies" />
                                                                            </div>
                                                                            <div className="info">
                                                                                <span>Creator</span>
                                                                                <h6> <Link to="/authors-02">{item.nameAuthor}
                                                                                </Link> </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <span>Current Bid</span>
                                                                            <h6> {item.price}</h6>
                                                                        </div>
                                                                    </MetaInfo>
                                                                </CardProduct>    	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </SwiperSlide>
                                    ))
                                }
                        </Swiper>
                </ThemesflatContainer>
            </LiveAuctions>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
        
    );
}

LiveAuction.propTypes = {
    data: PropTypes.array.isRequired,
}


export default LiveAuction;
