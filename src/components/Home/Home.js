import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import FruitServices from "../FruitServices/FruitServices";

const Home = () => {
  const [fruits, setfruits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fruitService")
      .then((res) => res.json())
      .then((data) => setfruits(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <h1 className="text-center my-5">My Fruits Warehouse Services</h1>
        <div className="row gy-5">
          {fruits.slice(0,6).map((fruit) => (
            <FruitServices key={fruit._id} fruit={fruit}></FruitServices>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
