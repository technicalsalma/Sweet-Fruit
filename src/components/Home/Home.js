import React, { } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import FruitServices from "../FruitServices/FruitServices";
import useFruitItem from "../Hook/useFuritItem";
import ExtraPart1 from "../Page/ExtraPart1/ExtraPart1";
import Order from "../Page/Order/Order";
import './Home.css'

const Home = () => {
  const [fruits, setfruits] = useFruitItem();

  const navigate = useNavigate()
  const hanleAddInventory = () =>{
    navigate('/addinventory');
  }

  
  return (
    <div>
      <Banner></Banner>
      <Order></Order>

      <div className="container">
        <h1 className="text-style">My Fruits Warehouse Services</h1>
        <div className="row gy-5">
          {fruits.slice(0, 6).map((fruit) => (
            <FruitServices key={fruit._id} fruit={fruit}></FruitServices>
          ))}
        </div>
      </div>
      <button onClick={hanleAddInventory} className="btn_2">
        New Item
      </button>

      <ExtraPart1></ExtraPart1>
    </div>
  );
};

export default Home;
