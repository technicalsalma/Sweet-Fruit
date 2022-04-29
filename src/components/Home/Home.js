import React, { useEffect, useState } from "react";
import FruitServices from "../FruitServices.js/FruitServices";

const Home = () => {
  const [fruits, setfruits] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setfruits(data));
  }, []);
  return (
    <div className="container">
      <h1>My data:{fruits.length}</h1>
      <div className="row gy-5">
        {fruits.map((fruit) => (
          <FruitServices key={fruit.id} fruit={fruit}></FruitServices>
        ))}
      </div>
    </div>
  );
};

export default Home;
