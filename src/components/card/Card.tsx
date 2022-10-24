import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CardMedia, CardTitle, CardProduct, CardBtn, TitleH5, MetaInfo, ButtonPlaceBid, Tags, Avatar, WishlistButton, Like, Author, Price } from './styles';
import { ROUTES } from '../../Routes';
import CardCountdown from '../common/Countdown';
import { ExternalLink } from 'react-external-link';

const Card = data => {

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        setModalShow(true)
    };

    return (
        <CardProduct>
            <CardMedia>
                <Link to={ROUTES.ITEM}><img src={data.item.image_preview_url || data.item.img} alt="axies" /></Link>
                <Link to={ROUTES.MOCKED_LOGIN_LINK}>
                    <WishlistButton>
                        <Like>{data.item.wishlist || ''}</Like>
                    </WishlistButton>
                </Link>
                <CardCountdown/>
                <ButtonPlaceBid>
                    <CardBtn onClick={() => openModal() } className="button-ntfs-font"><span>Place Bid</span></CardBtn>
                </ButtonPlaceBid>
            </CardMedia>
            <CardTitle>
                <TitleH5><Link to={ROUTES.ITEM}>"{data.item.name || data.item.title}"</Link></TitleH5>
                <Tags>{data.item.tags || 'tag'}</Tags>
            </CardTitle>
            <MetaInfo>
                <Author>
                    <Avatar>
                        <img src={data.item.imgAuthor ||'https://pbs.twimg.com/media/FRD-mSRXIAAaOK4.png'} alt="axies" />
                    </Avatar>
                    <div>
                        <span>Creator</span>
                        <h6> <ExternalLink href={ROUTES.AUTHOR_LINK}>{data.item.nameAuthor || 'Shiba Satoshi'}
                        </ExternalLink> </h6>
                    </div>
                </Author>
                <Price>
                    <span>Current Bid</span>
                    <h6>{data.item.price || '5 ETH'}</h6>
                </Price>
            </MetaInfo>
        </CardProduct>
    )
}


export default Card;