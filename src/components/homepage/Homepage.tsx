import { useSelector } from "react-redux";

export interface HomeProps {} const HomePage = (props:HomeProps) => {

    const data:any = useSelector((state) => state);

    const nftCards = data.map((nftCard:any) =>
      <li>{nftCard.id}</li>
    );

    return (
      <div className="m-container">
        <h2>HomePage</h2>
        <div className="m-cards__wrap">
          {nftCards}
        </div>
      </div>
    );
  }

export default HomePage;