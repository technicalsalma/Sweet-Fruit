import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./MyItems.css";
// import axios from "axios";
// import useFruitItem from "../../Hook/useFuritItem";

const MyItems = () => {
  //==============jwt========//
  const [user] = useAuthState(auth);

  const [fruits, setfruits] = useState([]);
  console.log(fruits);
  const handleButton = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      const url = `https://server-site-fruits.onrender.com/fruitService/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
         const remaining = fruits.filter((fruits) => fruits._id !== id);
          setfruits(remaining);
        });
    }
  };

  useEffect(() => {
    const url =
      "http://localhost:5000/fruitServices/myProduct";
    fetch(url, {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setfruits(data));
  }, [user]);

  return (
    <div className="container">
      <h2 className="text-style">Chosse Your Inventory</h2>
      <div className="allitems-container">
        {fruits.map((fruit) => (
          <div key={fruit._id}>
            <div className="all-items">
              <div>
                <h5>{fruit.name}</h5>
                <p>
                  <small>price: {fruit.price}</small>
                </p>
              </div>

              <div>
                <button onClick={() => handleButton(fruit._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
