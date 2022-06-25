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

export { Container, CardContainer, FlexWrapper, MainInner };