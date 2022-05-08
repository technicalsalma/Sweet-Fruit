import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import "./AddInventory.css";

const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const email = user.email;
  const onSubmit = (data) => {
    const newData = { ...data, email };
    console.log(newData);
    const url = `https://secret-plateau-50974.herokuapp.com/fruitService`;
    fetch(url, {
      method: "POST",
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="">
      <h4 className="addinventory-title">Please Add Your New Inventory</h4>
      <form
        className="w-25 mx-auto d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-2 border border-dark"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2 border border-dark"
          placeholder="Suplier Name"
          {...register("Suplier Name", { required: true, maxLength: 20 })}
        />

        <input
          className="mb-2 border border-dark"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2 border border-dark"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 border border-dark"
          placeholder="photo url"
          type="text"
          {...register("img")}
        />
        <textarea
          className="mb-2 border border-dark"
          placeholder="description"
          {...register("description")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddInventory;
