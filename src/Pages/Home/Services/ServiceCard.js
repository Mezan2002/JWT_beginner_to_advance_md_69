import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img className="p-5 h-80 rounded-3xl" src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-orange-500 text-left font-semibold text-xl">
              Price: ${price}
            </p>
          </div>
          <Link to={`/services/${_id}`}>
            <div className="">
              <FaArrowRight className="text-2xl mr-5"></FaArrowRight>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
