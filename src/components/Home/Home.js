import React, { } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import FruitServices from "../FruitServices/FruitServices";
import useFruitItem from "../Hook/useFuritItem";
import ExtraPart1 from "../Page/ExtraPart1/ExtraPart1";
import Order from "../Page/Order/Order";
import { BeakerIcon } from "@heroicons/react/solid";
import './Home.css'

const Home = () => {
  const [fruits] = useFruitItem();
  const navigate = useNavigate();
  
  return (
    <div>
      <Banner></Banner>
      <Order></Order>

      <div className="container">
        <h1 className="text-style">Fruits Warehouse inventory items</h1>
        <div className="row gy-5">
          {fruits.slice(0, 6).map((fruit) => (
            <FruitServices key={fruit._id} fruit={fruit}></FruitServices>
          ))}
        </div>

        <button
          onClick={() => navigate("/manageitems")}
          type="button"
          className="manag-btn"
        >
          All-manag-item
        </button>

        <div className="border border-1"></div>
      </div>
      <ExtraPart1></ExtraPart1>
    </div>
  );
};

export default Home;
