import React from "react";
import { useForm } from "react-hook-form";
import './AddInventory.css'

const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  // const [user] = useAuthState(auth)
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/fruitService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="">
      <h4 className="addinventory-title">Please Add Your Inventory</h4>
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
