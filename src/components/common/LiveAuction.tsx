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
import { CardProduct, FlexRow, ThemesflatContainer, TitleH2 } from './styles';

const LiveAuctions = styled.div`
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
                                                                    <div className="card-media">
                                                                        <Link to="/item-details-01"><img src={item.img} alt="axies" /></Link>
                                                                        <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                                                                        <div className="featured-countdown">
                                                                            <span className="slogan"></span>
                                                                            <Countdown date={Date.now() + 500000000}>
                                                                                <span>You are good to go!</span>
                                                                            </Countdown>
                                                                        </div>
                                                                        <div className="button-place-bid">
                                                                            <button onClick={() => setModalShow(true)} className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-title">
                                                                        <h5><Link to="/item-details-01">"{item.title}"</Link></h5>
                                                                        <div className="tags">{item.tags}</div>
                                                                    </div>
                                                                    <div className="meta-info">
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
                                                                            <h5> {item.price}</h5>
                                                                        </div>
                                                                    </div>
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
