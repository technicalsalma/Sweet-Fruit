import React from "react";
import { useNavigate } from "react-router-dom";
import useFruitItem from "../Hook/useFuritItem";

import "./ManageItems.css";

const ManageItems = () => {
  const [fruits, setfruits] = useFruitItem();
  const navigate = useNavigate();

  const handleAddInventory = () => {
    navigate("/addinventory");
  };

  const handleButton = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      const url = `https://secret-plateau-50974.herokuapp.com/fruitService/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
       
          const remaining = fruits.filter(
            (fruitService) => fruitService._id !== id
          );
          setfruits(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="text-center my-3">
        <i>Our all management items</i>
      </h2>
      <div className="container">
        <div className="row gy-5">
          {fruits.map((fruit) => (
            <div key={fruit._id}>
              <div className="all-manage-items">
                <div className="all-manage-items-info">
                  <h2>{fruit.name}</h2>
                  <p>Id: {fruit._id}</p>
                  <h5>Suplier Name: {fruit.supplier}</h5>
                  <p>
                    Price: <small>{fruit.price}</small>
                  </p>
                  <p>
                    Quantity: <small>{fruit.quantity}</small>
                  </p>
                  <div>
                    <button onClick={() => handleButton(fruit._id)}>
                      Delete
                    </button>
                  </div>
                </div>
                <div>
                  <img src={fruit.img} alt="" />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div>
          <button onClick={handleAddInventory} className="manag-btn">
            Add New Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
