import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CardMedia, CardTitle, CardProduct, CardBtn, TitleH5, MetaInfo, ButtonPlaceBid, Tags, Avatar, WishlistButton, Like, Author } from './styles';
import { ROUTES } from '../../Routes';
import CardCountdown from '../common/Countdown';

const Card = data => {

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        setModalShow(true)
    };

    return (
        <CardProduct className="sc-card-product">
            <CardMedia>
                <Link to={ROUTES.ITEM}><img src={data.item.image_preview_url || data.item.img} alt="axies" /></Link>
                <Link to={ROUTES.MOCKED_LOGIN_LINK} className="wishlist-button heart">
                    <WishlistButton>
                        <Like>{data.item.wishlist || ''}</Like>
                    </WishlistButton>
                </Link>
                <CardCountdown/>
                <ButtonPlaceBid data-button-place-bid>
                    <CardBtn onClick={() => openModal() } className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></CardBtn>
                </ButtonPlaceBid>
            </CardMedia>
            <CardTitle className="card-title">
                <TitleH5><Link to={ROUTES.ITEM}>"{data.item.name ? data.item.name : data.item.title}"</Link></TitleH5>
                <Tags>{data.item.tags || 'tag'}</Tags>
            </CardTitle>
            <MetaInfo>
                <Author>
                    <Avatar>
                        <img src={data.item.imgAuthor !== undefined ? data.item.imgAuthor : 'https://pbs.twimg.com/media/FRD-mSRXIAAaOK4.png'} alt="axies" />
                    </Avatar>
                    <div>
                        <span>Creator</span>
                        <h6> <Link to="/authors-02">{data.item.nameAuthor !== undefined ? data.item.nameAuthor : 'Shiba Satoshi'}
                        </Link> </h6>
                    </div>
                </Author>
                <div className="price">
                    <span>Current Bid</span>
                    <h6>{data.item.price !== undefined ? data.item.price : '5 ETH'}</h6>
                </div>
            </MetaInfo>
        </CardProduct>
    )
}


export default Card;