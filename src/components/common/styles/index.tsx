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

export { Container, CardContainer, FlexWrapper, MainInner, ThemesflatContainer, FlexRow, TitleH2, CardProduct };