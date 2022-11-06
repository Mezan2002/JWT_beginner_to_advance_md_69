import React from "react";
import { FaStar } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img className="p-5 h-80 rounded-3xl" src={image} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center mb-3">
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
          <FaStar className="text-yellow-400"></FaStar>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-3">{name}</h2>
            <p className="text-orange-500 font-semibold text-xl">
              Price: ${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
