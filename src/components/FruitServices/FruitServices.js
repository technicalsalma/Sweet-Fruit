import React from "react";

const FruitServices = ({ fruit }) => {
  const { name, img, supplier, price, quantity, description } = fruit;
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={img} class="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{supplier}</p>
          <p>price: ${price}</p>
          <p>Quantity:{quantity}</p>
          <p className="card-text">{description}</p>
          <button type="button" class="btn btn-warning">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitServices;
