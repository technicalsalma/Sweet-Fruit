import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FruitDetail = () => {
   
    const { fruitId } = useParams();
    const stockRef = useRef("");
    const [fruit, setFruit] =useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
        const url = `http://localhost:5000/fruitService/${fruitId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruit(data))
    },[fruitId])

  const handleDelivered = () => {

        const updateStock = {
          quantity: parseInt(fruit.quantity) - 1,
          name: fruit.name,
          price: fruit.price,
          description: fruit.description,
          supplier: fruit.supplier,
          img: fruit.img,
        };
        const url = `http://localhost:5000/fruitService/${fruitId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFruit(updateStock);
            })
    }


    const stockUpdate = (event) => {
        event.preventDefault()
        const newStock = stockRef.current.value;
        console.log(newStock);
        const updateStock = {
          quantity: parseInt(fruit.quantity) + parseInt(newStock),
          name: fruit.name,
          price: fruit.price,
          description: fruit.description,
          supplier: fruit.supplier,
          img: fruit.img,
        };

        // send data
        const url = `http://localhost:5000/fruitService/${fruitId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFruit(updateStock);
            })
        event.target.reset()
    }

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
            Manag-item
          </button>

          <button onClick={() => handleDelivered()}>Deliverd</button>
          <div>
            <form className="d-flex" onSubmit={stockUpdate}>
              <input
                className="border"
                ref={stockRef}
                type="number"
                name="added"
                id=""
              />
              <input type="submit" value="add stock" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default FruitDetail;