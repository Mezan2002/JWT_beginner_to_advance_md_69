import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-with-jwt-by-mezan.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center my-5">
      <p className="text-xl font-semibold text-orange-500">Service</p>
      <h2 className="text-4xl font-bold">Our Service Area</h2>
      <p className="mt-5 mb-14 text-gray-500 capitalize">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-outline btn-error mb-20 font-semibold">
        More Services
      </button>
    </div>
  );
};

export default Services;
