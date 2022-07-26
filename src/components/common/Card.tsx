import { useState } from 'react';
import styled from 'styled-components';
import Countdown from "react-countdown";
import { Link } from 'react-router-dom'
import { CardBtn, CardProduct, TitleH5 } from './styles';

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

const Card = data => {

    const [modalShow, setModalShow] = useState(false);

    console.log(data)

    return (
        <CardProduct className="sc-card-product">
            <CardMedia className="card-media">
                <Link to="/item-details-01"><img src={data.item.image_preview_url ? data.item.image_preview_url : data.item.img} alt="axies" /></Link>
                <Link to="/login" className="wishlist-button heart"><span className="number-like">{data.item.wishlist !== undefined ? data.item.wishlist : ''}</span></Link>
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
                <TitleH5><Link to="/item-details-01">"{data.item.name ? data.item.name : data.item.title}"</Link></TitleH5>
                <Tags className="tags">{data.item.tags !== undefined ? data.item.tags : 'tag'}</Tags>
            </CardTitle>
            <MetaInfo className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={data.item.imgAuthor !== undefined ? data.item.imgAuthor : 'https://pbs.twimg.com/media/FRD-mSRXIAAaOK4.png'} alt="axies" />
                    </div>
                    <div className="info">
                        <span>Creator</span>
                        <h6> <Link to="/authors-02">{data.item.nameAuthor !== undefined ? data.item.nameAuthor : 'Shiba Satoshi'}
                        </Link> </h6>
                    </div>
                </div>
                <div className="price">
                    <span>Current Bid</span>
                    <h6>{data.item.price !== undefined ? data.item.price : '5 ETH'}</h6>
                </div>
            </MetaInfo>
        </CardProduct>
    )
}


export default Card;