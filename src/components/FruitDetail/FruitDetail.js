import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FruitDetail = () => {
  const { fruitId } = useParams();
  const stockRef = useRef("");
  const [fruit, setFruit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://secret-plateau-50974.herokuapp.com/fruitService/${fruitId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, [fruitId]);

  const handleDelivered = () => {
    const updateStock = {
      quantity: parseInt(fruit.quantity) - 1,
      name: fruit.name,
      price: fruit.price,
      description: fruit.description,
      supplier: fruit.supplier,
      img: fruit.img,
    };
    const url = `https://secret-plateau-50974.herokuapp.com/fruitService/${fruitId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStock),
    })
      .then((res) => res.json())
      .then((data) => {
        
        setFruit(updateStock);
      });
  };

  const stockUpdate = (event) => {
    event.preventDefault();
    const newStock = stockRef.current.value;
    const updateStock = {
      quantity: parseInt(fruit.quantity) + parseInt(newStock),
      name: fruit.name,
      price: fruit.price,
      description: fruit.description,
      supplier: fruit.supplier,
      img: fruit.img,
    };

    // send data
    const url = `https://secret-plateau-50974.herokuapp.com/fruitService/${fruitId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStock),
    })
      .then((res) => res.json())
      .then((data) => {
         setFruit(updateStock);
      });
    event.target.reset();
  };

  return (
    <div className=" container">
      <h2 className="text-center my-3">
        <i className="">Single management item Details</i>
      </h2>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={fruit.img}
              className="img-fluid pt-5 px-5 rounded-start\"
              alt="..."
            />
            <p className="card-text px-4">{fruit.description}</p>
          </div>
          <div className="col-md-8">
            <div className="card-body pt-5 mt-5">
              <h5 className="card-title">{fruit.name}</h5>
              <p>ID: {fruit._id}</p>
              <p>{fruit.supplier}</p>
              <p>price: ${fruit.price}</p>
              <p className="text-danger fw-bolder">Quantity:{fruit.quantity}</p>

              <div className="card-body d-flex align-self-start">
                <button className="m-2" onClick={() => handleDelivered()}>
                  Deliverd
                </button>

                <form className="d-flex m-2" onSubmit={stockUpdate}>
                  <input
                    className="w-50"
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
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate("/manageitems")}
          type="button"
          className="manag-btn"
        >
          All-manag-item
        </button>
      </div>
    </div>
  );
};

export default FruitDetail;
