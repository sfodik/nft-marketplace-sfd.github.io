import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import Shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import Shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'
import imgbg from '../../assets/images/backgroup-secsion/img_bg_page_title.jpg'
import styled from 'styled-components';

const FlatTitlePage = styled.div`
    height: 618px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px 0 20px;
`;

const BgrGradient = styled.img`
    display: block;
    position: absolute;
    z-index: 1;
    &.gradient1 {
        top: 0;
        left: 0;
        width: 528px;
        height: 327px;
    }
    &.gradient2 {
        top: 72%;
        left: 73%;
        width: 315px;
        height: 195px;
    }
    &.gradient3 {
        top: 0;
        right: 0;
        width: 178px;
        height: 110px;
    }
`;

const Shape = styled.div`
    background: linear-gradient( 216.56deg,#E250E5 5.32%,#4B50E6 94.32%);
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    &.item-w-16 {
        width: 16px;
        height: 16px;
        top: 24.8%;
        right: 36.8%;
    }
    &.item-w-22 {
        top: 60.5%;
        left: 35.5%;
        width: 22px;
        height: 22px;
    }
    &.item-w-32 {
        width: 22px;
        height: 22px;
        top: 56.7%;
        right: 18.8%;
    }
    &.item-w-48 {
        top: 53.5%;
        right: 39.6%;
        width: 48px;
        height: 48px;
    }
    &.item-w-51 {
        top: 14.5%;
        right: 16.4%;
        width: 51px;
        height: 51px;
    }
    &.item-w-68 {
        top: 28%;
        right: 13.5%;
    }
    &.position2 {
        top: 28%;
        right: 53.8%;
        width: 68px;
        height: 68px;
    }
    &.style2 {
        &:before {
            content: '';
            width: 47px;
            height: 47px;
            background: #14141F;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
        }
    }
    &.item-w-51, &.item-w-32, &.item-w-16 {
        animation: move3 10s infinite linear;
    }
    &.item-w-22, &.item-w-48, &.item-w-68 {
        animation: move4 10s infinite linear;
    }
`;

const Overlay = styled.div`
    background: #14141F;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(52 52 68/30%);
    transition: all 0.3s ease-in-out;
`;

const MainSlider = styled.div`
    margin-left: calc(-100vw / 2 + 100% / 2);
    margin-right: calc(-100vw / 2 + 100% / 2);
`;

const ThemesflatContainer = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 1440px;
    max-width: 100%;
`;

const WrapHeading = styled.div`
    padding: 0 15px;
    display: flex;
`;

const Content = styled.div`
    width: 50%;
    padding-top: 114px;
`;

const SliderHeadingH2 = styled.div`
    transition-delay: 700ms !important;
    font-size: 56px;
    line-height: 1.3;
    font-weight: 700;
    color: #fff;
`;

const TfText = styled.div`
    color: #14141f;
    background: linear-gradient(-45deg, #E250E5, #4B50E6, #E250E5, #4B50E6);
    background-size: 100% 100%;
    -webkit-background-clip: text;
    -webkit-text-stroke: 3px transparent;
    -webkit-text-fill-color: #14141f;
`;

const SubHeading = styled.div`
    transition-delay: 900ms;
    font-size: 20px;
    line-height: 30px;
    color: #EBEBEB;
    text-transform: capitalize;
    margin-top: 29px;
    margin-bottom: 44px
`;

const Image = styled.div`
    text-align: right;
    position: relative;
    width: 50%;
    padding-top: 30px;
    padding-right: 132px;
`;

const ImgBg = styled.img`
    animation: move5 10s infinite linear;
    position: absolute;
    z-index: -1;
    right: 0%;
    top: 14%;
    max-width: 100%;
`;

const Img = styled.img`
    animation: move5 10s infinite linear;
`;

const Slider = props => {
    const data = props.data
    return (
        <MainSlider className="mainslider" >
            <Swiper
                modules={[Navigation,  Scrollbar, A11y ]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} className={item.class}>
                            <SliderItem item={item} />
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>
        </MainSlider>
    );
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const SliderItem = props => {
    return (
        <FlatTitlePage className="flat-title-page" style={{backgroundImage: `url(${imgbg})`}}>
        <BgrGradient className="gradient1" src={Shape1} alt="Axies" />
        <BgrGradient className="gradient2" src={Shape2} alt="Axies" />
        <BgrGradient className="gradient3" src={Shape3} alt="Axies" />
        <Shape className="Shape item-w-16"></Shape>
        <Shape className="Shape item-w-22"></Shape>
        <Shape className="Shape item-w-32"></Shape>
        <Shape className="Shape item-w-48"></Shape>
        <Shape className="Shape style2 item-w-51"></Shape>
        <Shape className="Shape style2 item-w-51 position2"></Shape>
        <Shape className="Shape item-w-68"></Shape>
        <Overlay></Overlay>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item">	
                        <ThemesflatContainer className="themesflat-container ">
                            <WrapHeading className="wrap-heading flat-slider">
                                <Content className='content'>
                                    <SliderHeadingH2 className="heading">{props.item.title_1}</SliderHeadingH2>	
                                    <SliderHeadingH2 className="heading mb-style"><TfText className="tf-text s1">{props.item.title_2}</TfText>                                          
                                    </SliderHeadingH2>
                                    <SliderHeadingH2 className="heading">{props.item.title_3}</SliderHeadingH2>
                                    <SubHeading className="sub-heading">{props.item.description}
                                    </SubHeading>
                                    <div className="flat-bt-slider flex style2">
                                        <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                        </span></Link>
                                        <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                        </span></Link>
                                    </div>
                                </Content>
                                <Image className="image">
                                    <ImgBg className="img-bg" src={props.item.imgbg} alt="axies" />
                                    <Img src={props.item.img} alt="axies" />
                                </Image>
                            </WrapHeading>   
                        </ThemesflatContainer>
                    </div>
                </div>
            </div>
        </div>        
    </FlatTitlePage>
    )    
}

export default Slider;
