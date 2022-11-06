import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrdersTableRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { customer, phone, serviceName, serviceId, _id, status } = order;
  const [orderedService, setOrderedService] = useState([]);

  useEffect(() => {
    fetch(
      `https://genius-car-server-with-jwt-by-mezan.vercel.app/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setOrderedService(data));
  }, [serviceId]);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                src={orderedService.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">
          Price: {orderedService.price}$
        </span>
      </td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersTableRow;
