import { useSelector } from "react-redux";

function Home() {

    const data = useSelector((state) => state)

    console.log(data)

    return (
      <div className="m-container">
        <h2>Home</h2>
      </div>
    );
  }

export default Home;