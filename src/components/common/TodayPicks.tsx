import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CardModal from './CardModal';
import Card  from '../card/Card';
import styled from 'styled-components';
import { FlexWrapper, ThemesflatContainer, TitleH2 } from './styles';
import { CardsPickSecteion } from '../card/styles';

const TodayPicksHeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 21px;
    a {
        text-decoration: none;
    }
`;

const ButtonWrap = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    a {
        background: transparent none repeat scroll 0 0;
        border-color: #fff;
        border: 2px solid #eeecff;
        padding: 14px 40px;
        color: #fff;
        position: relative;
        border-radius: 30px;
        display: inline-block;
        transition: all 0.3s ease;
        text-decoration: none;
        &:hover {
            background-color: #fff;
            border-color: #fff;
            color: black;
        }
    }
`;


const TodayPicks = props => {
    const data = props.data;

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }
    const [modalShow, setModalShow] = useState(false);

    const TodayPicksData = data.slice(0,visible);
    return (
        <Fragment>
        <CardsPickSecteion>
            <ThemesflatContainer>
                    <TodayPicksHeaderWrap>
                        <TitleH2>
                            Today's Picks
                        </TitleH2>
                    </TodayPicksHeaderWrap>
                    <FlexWrapper>
                    {
                        TodayPicksData.map((item,index) => (
                            <Card item={item} key={index}/>
                        ))
                    }
                    {
                        visible < data.length && 
                        <ButtonWrap> 
                            <Link to="#" id="load-more" onClick={showMoreItems}><span>Load More</span></Link>
                        </ButtonWrap>
                    }
                    </FlexWrapper>
            </ThemesflatContainer>
        </CardsPickSecteion>
        <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         />
        </Fragment>
    );
}



TodayPicks.propTypes = {
    data: PropTypes.array.isRequired,
}


export default TodayPicks;
