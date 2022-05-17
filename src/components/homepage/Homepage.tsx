import { useSelector } from "react-redux";

export interface HomeProps {} const HomePage = (props:HomeProps) => {
    const data = useSelector((state) => state)

    return (
      <div className="m-container">
        <h2>HomePage</h2>
      </div>
    );
  }

export default HomePage;