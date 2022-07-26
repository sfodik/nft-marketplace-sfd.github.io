import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom'
import logodark from '../../assets/images/shiba-inu-shib-logo.png';
import styled from 'styled-components';
import { ThemesflatContainer } from './styles';

const FooterInner = styled.div`
    padding: 80px 0 80px;
    background: #030303;
    .sub-widget-logo {
        padding-right: 35px;
        margin-bottom: 26px;
        font-size: 14px;
        line-height: 22px;
    }
    p {
        color: white;
    }
    .widget-menu {
        padding-top: 18px;
        &.style-1 {
            padding-left: 30px;
        }
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
    .form-subcribe form {
        position: relative;
    }
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
    i {
        color: #ffffff;
        transition: all 0.3s ease-in-out;
        font-family: 'nfts' !important;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }
`;


const ColLg3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
`;

const LogoFooter = styled.div`
    margin-bottom: 13px;
    img {
        display: block;
        height: auto;
        max-width: 60px;
        vertical-align: middle;
    }
`;

const ColLg2 = styled.div`
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
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
            title: "Activity",
            link: "/activity-01"
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
    const socialList = [
        {
            icon: "fab fa-twitter",
            link: "#"
        },
        {
            icon: "fab fa-facebook",
            link: "#"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "#"
        },
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "icon-fl-tik-tok-2",
            link: "#"
        },
        {
            icon: "icon-fl-vt",
            link: "#"
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
            <FooterInner id="footer" className="footer-light-style clearfix bg-style">
                <ThemesflatContainer className="themesflat-container">
                    <ColLg3 className="col-lg-3 col-md-12 col-12">
                        <div className="widget widget-logo">
                            <LogoFooter className="logo-footer" id="logo-footer">
                                <Link to="/">
                                    <img className='logo-dark' id="logo_footer" src={logodark} alt="nft-gaming" />
                                    
                                </Link>
                            </LogoFooter>
                            <p className="sub-widget-logo">Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                        </div>
                    </ColLg3>
                    <ColLg2 className="col-lg-2 col-md-4 col-sm-5 col-5">
                        <div className="widget widget-menu style-1">
                            <Title className="title-widget">My Account</Title>
                            <ul>
                                {
                                    accountList.map((item,index) =>(
                                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </ColLg2>
                    <ColLg2 className="col-lg-2 col-md-4 col-sm-7 col-7">
                        <div className="widget widget-menu style-2">
                            <Title className="title-widget">Resources</Title>
                            <ul>
                                {
                                    resourcesList.map((item,index) =>(
                                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </ColLg2>
                    <ColLg2 className="col-lg-2 col-md-4 col-sm-5 col-5">
                        <div className="widget widget-menu fl-st-3">
                            <Title className="title-widget">Company</Title>
                            <ul>
                                {
                                    companyList.map((item,index) =>(
                                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </ColLg2>
                    <ColLg3 className="col-lg-3 col-md-6 col-sm-7 col-12">
                        <div className="widget widget-subcribe">
                            <Title className="title-widget">Subscribe Us</Title>
                            <div className="form-subcribe">
                                <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit">
                                    <FormInput name="email" className="email" required />
                                    <FormInputBtn id="submit" ><i className="icon-fl-send"></i></FormInputBtn>
                                </form>
                            </div>
                            <div className="widget-social style-1 mg-t32">
                                <ul>
                                    {
                                        socialList.map((item,index) =>(
                                            <li key={index}><Link to={item.link}><i className={item.icon}></i></Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
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
