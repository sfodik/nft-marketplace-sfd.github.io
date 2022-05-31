import { Link } from "react-router-dom";
import { ROUTES } from '../../Routes';

import styled from 'styled-components';

import { Container } from "../commonComponents";

const HeaderInner = styled.div`
    background: #190a55;
`;

const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
`;

const MenuItem = styled.li`
    margin-right: 30px;
    list-style: none;
`;

const Header = () => {
    return (
        <HeaderInner>
            <Container>
                <div className='m-l-s-inner'>
                    <div className='m-logo'>
                    <img src="" alt="" />
                    </div>
                    <div className='m-search'>
                    <input type="text" />
                    </div>
                </div>
                <Menu className="m-menu">
                    <MenuItem><Link to="/">Home</Link></MenuItem>
                    <MenuItem><Link to={ROUTES.CATALOG_PATH}>Catalog</Link></MenuItem>
                    <MenuItem><Link to={ROUTES.ACTIVITY_PATH}>Activity</Link></MenuItem>
                </Menu>
            </Container>
      </HeaderInner>
    );
  }

export default Header;