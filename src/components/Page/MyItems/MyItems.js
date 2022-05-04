
import React from "react";
import useFruitItem from "../../Hook/useFuritItem";

import "./MyItems.css";

const MyItems = () => {

  const [fruits, setfruits] = useFruitItem();

  const handleButton = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/fruitService/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = fruits.filter((fruits) => fruits._id !== id);
          setfruits(remaining);
        });
    }
  };

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
