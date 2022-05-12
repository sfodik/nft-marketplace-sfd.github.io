import { useSelector } from "react-redux";

export interface CardsProps {
  data?: { id: number }
}

const HomePage = (props: CardsProps) => {

    const data = useSelector((state) => state)

    console.log(data)

    return (
      <div className="m-container">
        <h2>HomePage</h2>
      </div>
    );
  }

export default HomePage;