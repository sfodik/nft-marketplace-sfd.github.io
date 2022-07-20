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

const FlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const MainInner = styled.div`
    background: #14141F;
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

const FlexRow = styled.div`
    animation: move5 10s infinite linear;
    position: absolute;
    z-index: -1;
    right: 0%;
    top: 14%;
    max-width: 100%;
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
            position: absolute;
            font-family: 'nfts';
            font-size: 20px;
            left: 0;
            font-weight: 100;
            top: -4px;
            color: #5142fc;
        }
    }
`;

export { Container, CardContainer, FlexWrapper, MainInner, ThemesflatContainer, FlexRow, TitleH2, CardProduct, CardBtn, TitleH5 };