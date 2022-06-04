import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 0 60px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Card = styled.div`
    width: 20%;
    margin-right: 60px;
    display: block;
    padding: 20px;
    img {
        max-width: 100%;
    }
`;

export { Container, Card };