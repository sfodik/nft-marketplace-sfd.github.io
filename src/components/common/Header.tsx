import { useRef , useState , useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import menus from "../pages/menu";
import styled from 'styled-components';
import { Container, FlexWrapper } from "../common/styles/index";
import logodark from '../../assets/images/shiba-inu-shib-logo.png';
import "../../assets/fonts/fonts.css";

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
    @media screen and (max-width: 600px) {
        height: auto;
    }
`;

const Menu = styled.div`
    display: flex;
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
        text-decoration: none;
    }
`;

const MenuItem = styled.li`
    margin-right: 30px;
    list-style: none;
    position: relative;
    &.menu-item-has-children {
        &:hover {
            .sub-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }
        & > a {
            position: relative;
            &:after {
                content: '\f107';
                font-family: 'Font Awesome 5 Pro';
                font-weight: 300;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
`;

const MenuSubItem = styled.li`
    position: relative;
    &:not(:last-child) {
        a {
            border-bottom: 1px solid #e1e1e18e;
        }
    }
    a {
        display: block;
        font-size: 18px;
        color: #14141F;
        padding: 20px;
        font-weight: 700;
        text-decoration: none;
    }
`;

const SiteLogo = styled.div`
    img {
        width: auto;
        height: auto;
        display: block;
        max-height: 60px;
    }
`;

const MainNav = styled.div`
    // position: absolute;
    margin-left: 10%;
    top: 0;
    z-index: 0;
    ul {
        margin: 0px;
        display: flex;
    }
`;

const SubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 250px;
    background-color: #ffff;
    border-radius: 6px;
    box-shadow: -2px 6px 23px #b4b4b44f;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: all 0.3s ease;
    &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 25px;
        height: 15px;
        width: 15px;
        transform: rotate(45deg);
        background-color: #fff;
    }
`;

const FlexCommonInner = styled.div`
    display: flex;
    padding: 16px 0;
    right: 15px;
    top: 0;
    justify-content: end;
    align-items: center;
    margin-left: auto;
    @media screen and (max-width: 600px) {
        margin-right: auto;
    }
    span {
        padding-left: 28px;
        font-size: 15px;
        z-index: 1;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        position: relative;
        transition: all 0.3s ease;
        &:before {
            content: '\\e901';
            transition: all 0.05s ease;
            position: absolute;
            font-family: 'nfts';
            font-size: 20px;
            left: 0;
            font-weight: 100;
            top: -4px;
        }
    }
    a {
        padding: 12px 35px 12px 32px;
        position: relative;
        display: inline-block;
        border: 2px solid #5142FC;
        color: white;
        box-sizing: border-box;
        padding: 11px 35px;
        border-radius: 30px;
        transition: all 0.3s ease;
        text-decoration: none;
    }
`;

const Header = () => {

    const headerRef = useRef(null);

    const { pathname } = useLocation();

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
                    <div ref={btnToggle} onClick={menuToggle}><span></span></div>
                    <MainNav ref={menuLeft} >
                        <Menu>
                            {
                                menus.map((data,index) => (
                                    <MenuItem key={index} onClick={()=> handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : '' } ${activeIndex === index ? 'active' : ''} ` }   >
                                        <Link to={data.links}>{data.name}</Link>
                                        {
                                                data.namesub &&
                                                <SubMenu className="sub-menu" >
                                                {
                                                    data.namesub.map((submenu) => (
                                                        <MenuSubItem key={submenu.id} className={
                                                            pathname === submenu.links
                                                            ? "menu-item current-item"
                                                            : "menu-item"
                                                        }><Link to={submenu.links}>{submenu.sub}</Link></MenuSubItem>
                                                    ))
                                                }
                                            </SubMenu>
                                        }
                                        
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </MainNav>
                    <FlexCommonInner>
                            <Link to="/wallet-connect"><span>Wallet connect
                            </span></Link>
                    </FlexCommonInner>
                </FlexWrapper>
            </Container>
      </HeaderInner>
    );
  }

export default Header;