import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className='m-header'>
            <div className='m-container-sh'>
            <div className='m-l-s-inner'>
                <div className='m-logo'>
                <img src="" alt="" />
                </div>
                <div className='m-search'>
                <input type="text" />
                </div>
            </div>
            <ul className='m-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/activity">Activity</Link></li>
            </ul>
            </div>
      </div>
    );
  }

export default Header;