import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkOutImage from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./CheckOut.css";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id } = service;
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || form.email.value;
    const message = form.message.value;

    const order = {
      serviceId: _id,
      serviceName: title,
      customer: fullName,
      phone,
      email,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order Placed Successfully");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="relative">
        <div className="checkOutImage">
          <img className="w-full my-10" src={checkOutImage} alt="" />
        </div>
        <p className="absolute top-24  left-24 text-white text-5xl font-bold">
          Check Outing...
        </p>
        <p className="absolute top-[152px]  left-24 text-white text-5xl font-bold">
          Ordering: {title}
        </p>
        <p className="absolute top-52  left-24 text-white text-5xl font-bold">
          Price: {price}$
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full h-64 mb-10"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <button className="btn btn-error text-white btn-block mb-20">
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
