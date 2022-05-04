import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FruitDetail = () => {
   
    const { fruitId } = useParams();
    const [fruit, setFruit] =useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
        const url = `http://localhost:5000/fruitService/${fruitId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruit(data))
    },[])
    return (
      <div className="card">
        <div className="col-md-4 mx-auto mt-2">
          <div className="card">
            <img src={fruit.img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{fruit.name}</h5>
              <p>{fruit._id}</p>
              <p>{fruit.supplier}</p>
              <p>price: ${fruit.price}</p>
              <p>Quantity:{fruit.quantity}</p>
              <p className="card-text">{fruit.description}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/manageitems")}
            type="button"
            className="btn btn-warning"
          >
            manag item
          </button>
        </div>
      </div>
    );
};

export default FruitDetail;