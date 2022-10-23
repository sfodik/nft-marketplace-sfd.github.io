import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
    width: 1440px;
    max-width: 100%;
`;

const CardContainer = styled.div`
    width: 20%;
    margin-right: 60px;
    display: block;
    padding: 20px;
    img {
        max-width: 100%;
    }
`;

const TitleH2 = styled.h2`
    font-size: 36px;
    position: relative;
    line-height: 44px;
    color: white;
    text-align: center;
`;

const TitleH5 = styled.h5`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70%;
    text-transform: capitalize;
    line-height: 26px;
    font-size: 18px;
    font-weight: 700;
    a {
        text-decoration: none;
        color: white;
        letter-spacing: 0.1px;
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

const CardProduct = styled.div`
    padding: 20px;
    background: #343444;
    box-shadow: 0px 3px 16px rgb(47 83 109 / 12%);
    border-radius: 20px;
    margin-bottom: 40px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        transition: all 0.3s ease;
        transition: all 0.4s ease;
        ${ButtonPlaceBid} {
            top: 50%;
            opacity: 1;
            transition-delay: 0.1s;
        }
    }
`;

const CardBtn = styled.button`
    padding: 12px 27px;
    display: inline-block;
    border: 2px solid #5142fc;
    color: #5142fc;
    box-sizing: border-box;
    padding: 11px 35px;
    border-radius: 30px;
    transition: all 0.3s ease;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    &:hover {
        border-color: #5142FC;
        background: #5142FC;
        color: #fff;
        span {
            color: #fff;
            &:before {
                color: white;
            }
        }
    }
    span {
        color: #343444;
        padding-left: 28px;
        font-size: 15px;
        font-weight: 700;
        line-height: 22px;
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;
        &:before {
            transition: all 0.05s ease;
            position: absolute;
            font-size: 20px;
            left: 0;
            font-weight: 100;
            top: -4px;
            color: #5142fc;
        }
    }
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
    .button-ntfs-font-fire {
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
    span {
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

const Avatar = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 15px;
    overflow: hidden;
    margin-right: 12px;
    flex-shrink: 0;
`;

const WishlistButton = styled.div`
    position: absolute;
    top: 13px;
    right: 11px;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    padding: 2px 11px;
    border-radius: 8px;
    background-color: #14141F;
    cursor: pointer;
    border: none;
    text-decoration: none;
    &::before {
        content: '\f004';
        font-family: 'Font Awesome 5 Pro';
        font-weight: 300;
        margin-right: 6px;
    }
`;

const Like = styled.div`
    width: 22px;
    display: inline-block;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CardsPickSecteion = styled.div`
    padding: 58px 0 43px;
    ${CardProduct} {
        max-width: 324px;
        margin-right: 28px;
        margin-bottom: 30px;
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
`;

export { Container, CardContainer, CardMedia, CardTitle, TitleH2, CardProduct, CardBtn, TitleH5, MetaInfo, FeaturedCountdown, ButtonPlaceBid, Tags, Avatar, WishlistButton, Like, Author, CardsPickSecteion };