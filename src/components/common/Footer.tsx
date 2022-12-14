import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
import logodark from '../../assets/images/shiba-inu-shib-logo.png';
import styled from 'styled-components';
import { ThemesflatContainer } from './styles';

const FooterInner = styled.div`
    padding: 80px 0 80px;
    background: #030303;
    span {
        padding-right: 35px;
        margin-bottom: 26px;
        font-size: 14px;
        line-height: 22px;
        color: white;
        @media screen and (max-width: 600px) {
            padding-right: 0;
        }
    }
    p {
        color: white;
    }
    .themesflat-container {
        display: flex;
        flex-wrap: wrap;
    }
    ul {
        list-style: none;
        li {
            margin-bottom: 14px;
            padding: 0.1em 0;
        }
        a {
            font-size: 14px;
            line-height: 22px;
            position: relative;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            letter-spacing: 0.1px;
            color: white;
        }
    }
    form {
        position: relative;
    }
`;

const WidgetMenu = styled.div`
    padding-top: 18px;
`;

const FormInput = styled.input.attrs({ 
    type: 'email',
    placeholder: 'info@yourgmail.com'
  })`  
    background: transparent;
    border: 1px solid rgba(138, 138, 160, 0.3);
    border-radius: 10px;
    width: 100%;
    padding: 13px 50px 12px 22px;
    font-size: 14px;
    box-shadow: none;
    line-height: 28px;
    color: #8A8AA0;
    max-width: 100%;
    margin: 0;
    vertical-align: baseline;
`;

const FormInputBtn = styled.button.attrs({ 
    type: 'submit',
    name: 'submit'
  })`  
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #5142fc;
    font-size: 21px;
    padding: 15px 18px 14px 19px;
    color: #343444;
    transition: all 0.3s ease-in-out;
    -webkit-appearance: button;
    font-weight: 700;
    line-height: 22px;
    border: 1px solid #5142fc;
    cursor: pointer;
`;

const IconSend = styled.span`
    color: #ffffff;
    transition: all 0.3s ease-in-out;
    font-family: 'nfts' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    &:before {
        content: "\\e91e";
    }
`;


const ColLg3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    @media screen and (max-width: 600px) {
        flex: 0 0 100%;
        max-width: 100%;
        width: 100%;
        text-align: center;
    }
`;

const LogoFooter = styled.div`
    margin-bottom: 13px;
    img {
        display: block;
        height: auto;
        max-width: 60px;
        vertical-align: middle;
        @media screen and (max-width: 600px) {
            margin: 0 auto;
        }
    }
`;

const ColLg2 = styled.div`
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    @media screen and (max-width: 600px) {
        flex: 0 0 100%;
        max-width: 100%;
        width: 100%;
        text-align: center;
    }
`;

const Title = styled.h5`
    line-height: 26px;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 700;
    color: white;
`;

const Footer = () => {
    const accountList = [
        {
            title: "Authors",
            link: "/authors-01"
        },
        {
            title: "Collection",
            link: "/wallet-connect"
        },
        {
            title: "Author Profile",
            link: "/edit-profile"
        },
        {
            title: "Create Item",
            link: "/create-item"
        },
    ]
    const resourcesList = [
        {
            title: "Help & Support",
            link: "/help-center"
        },
        {
            title: "Live Auctions",
            link: "/live-auctions"
        },
        {
            title: "Item Details",
            link: "/item-details-01"
        },
        {
            title: "Explore",
            link: "/Explore-01"
        },
    ]
    const companyList = [
        {
            title: "Explore",
            link: "/explore-01"
        },
        {
            title: "Contact Us",
            link: "/contact-01"
        },
        {
            title: "Our Blog",
            link: "/blog"
        },
        {
            title: "FAQ",
            link: "/faq"
        },
    ]

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

      
    return (
        <div>
            <FooterInner id="footer">
                <ThemesflatContainer>
                    <ColLg3>
                        <div>
                            <LogoFooter>
                                <Link to="/">
                                    <img src={logodark} alt="nft-gaming" />
                                </Link>
                            </LogoFooter>
                            <span>Lorem ipsum dolor sit amet,consectetur<br/> adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</span>
                        </div>
                    </ColLg3>
                    <ColLg2>
                        <WidgetMenu>
                            <Title>My Account</Title>
                            <ul>
                                {
                                    accountList.map((item,index) =>(
                                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </WidgetMenu>
                    </ColLg2>
                    <ColLg2>
                        <WidgetMenu>
                            <Title>Resources</Title>
                            <ul>
                                {
                                    resourcesList.map((item,index) =>(
                                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </WidgetMenu>
                    </ColLg2>
                    <ColLg2>
                        <WidgetMenu>
                            <Title>Company</Title>
                            <ul>
                                {
                                    companyList.map((item,index) =>(
                                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </WidgetMenu>
                    </ColLg2>
                    <ColLg3>
                        <WidgetMenu>
                            <Title>Subscribe Us</Title>
                            <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8">
                                <FormInput name="email" className="email" required />
                                <FormInputBtn id="submit" ><IconSend></IconSend></FormInputBtn>
                            </form>
                        </WidgetMenu>
                    </ColLg3>
                </ThemesflatContainer>
            </FooterInner>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }

        </div>

    );
}

export default Footer;
