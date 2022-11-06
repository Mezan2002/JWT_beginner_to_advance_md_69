import React from "react";
import { FaCalendar, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div>
      <div className="card w-full bg-black text-white my-10">
        <div className="flex items-center py-24 w-full mx-auto">
          <div className="flex items-center justify-center w-4/12">
            <FaCalendar className="text-4xl"></FaCalendar>
            <div className="pl-5">
              <p>We are open monday-friday</p>
              <h3 className="text-3xl">7:00 am - 9:00 pm</h3>
            </div>
          </div>
          <div className="flex items-center justify-center w-4/12">
            <FaPhoneAlt className="text-4xl"></FaPhoneAlt>
            <div className="pl-5">
              <p>Have a question?</p>
              <h3 className="text-3xl">+2546 251 2658</h3>
            </div>
          </div>
          <div className="flex items-center justify-center w-4/12">
            <FaMapMarkedAlt className="text-4xl"></FaMapMarkedAlt>
            <div className="pl-5">
              <p>Need a repair? our address</p>
              <h3 className="text-3xl">Liza Street, New York</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
