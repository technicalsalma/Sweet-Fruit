import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import "./MyItems.css";
import axios from "axios";


const MyItems = () => {
  //==============jwt========//
  // const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([])
  // useEffect( () =>{

  //   const getOrders = async() =>{
  //     const email = user.email;
  //    const url = `http://localhost:5000/order?email=${email}`;
  //    const {data} = await axios.get(url,{
  //      headers:{
  //        authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //      }
  //    });
  //    setOrders(data);
  //   }
  //   getOrders()
    
  // })

  //==============jwt========//

   const [fruits, setfruits] = useState([]);
   const [user] =useAuthState(auth);

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

useEffect( () => {
        const getItems = async() =>{
            const email = user?.email;
            console.log(email)
            const url = `http://localhost:5000/fruitServices?email=${email}`;
            if(email){
                const {data} = await axios.get(url);
            setfruits(data);
            }
        }
        getItems();
    },[user])

  return (
    <div className="container">
      
      <h2 className="text-center">Your orders: {orders.length}</h2>
    
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
