import React , { useRef , useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from '../../Routes';

import styled from 'styled-components';

import { Container, FlexWrapper } from "../common/styles/index";

import logodark from '../../assets/images/shiba-inu-shib-logo.png'

const HeaderInner = styled.div`
    position: absolute;
    z-index: 100;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #14141F;
    box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 50%);
    top: 0;
    &.is-fixed {
        position: fixed;
        top: -161px;
        left: 0;
        width: 100%;
        box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 30%);
        z-index: 9999;
        background: linear-gradient( 227.3deg, #8A208C 0%, #181B81 100.84%);
        border: none;
        opacity: 1;
        transition: all 0.5s ease;
    }
    &.is-small {
        top: 0;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
    li {
        padding: 26px 25px 26px 13px;
    }
    a {
        position: relative;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        color: #fff;
        padding-right: 15.5px;
    }
`;

const MenuItem = styled.li`
    margin-right: 30px;
    list-style: none;
`;

const SiteLogo = styled.div`
    img {
        width: auto;
        height: auto;
        display: block;
        max-height: 60px;
    }
`;

const Header = () => {

    const headerRef = useRef (null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const btnSearch = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }

    const searchBtn = () => {
        btnSearch.current.classList.toggle('active');
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index); 
    };

    return (
        <HeaderInner ref={headerRef} className="js-header">
            <Container>
                <FlexWrapper>
                    <SiteLogo>
                        <img src={logodark} alt="" />
                    </SiteLogo>
                    <Menu className="m-menu">
                        <MenuItem><Link to="/">Home</Link></MenuItem>
                        <MenuItem><Link to={ROUTES.CATALOG_PATH}>Catalog</Link></MenuItem>
                        <MenuItem><Link to={ROUTES.ACTIVITY_PATH}>Activity</Link></MenuItem>
                    </Menu>
                </FlexWrapper>
            </Container>
      </HeaderInner>
    );
  }

export default Header;