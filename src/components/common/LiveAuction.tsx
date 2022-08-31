import { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardModal from './CardModal'
import Card from './Card';

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
                                                                <Card item={item} className="sc-card-product"/>
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
