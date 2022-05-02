import React from "react";
import { useNavigate } from "react-router-dom";

const FruitServices = ({ fruit }) => {
  const {_id, name, img, supplier, price, quantity, description } = fruit;
  const navigate = useNavigate();

  const navigateToFruitDetail = (_id) =>{
    navigate(`/fruit/${_id}`)
  }

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
          <button type="button" onClick={() =>navigateToFruitDetail(_id)} className="btn btn-warning">
             Stock update
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitServices;
