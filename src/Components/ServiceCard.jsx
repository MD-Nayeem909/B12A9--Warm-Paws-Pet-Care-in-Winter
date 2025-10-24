import { PawPrint } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { serviceId, serviceName, description, image, price, rating } = service;
  return (
    <div
      key={serviceId}
      className="card bg-base-100 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
      <figure className="">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-60 object-cover rounded-lg"
        />
      </figure>
      <div className="card-body px-0">
        <h2 className="card-title text-primary flex justify-between">
          {serviceName} <span className="text-secondary">${price}</span>
        </h2>

        <p className="text-primary">{description}</p>
        <div className="card-actions flex justify-between items-center">
          <button
            // to={"/details/:id"}
            className="btn btn-outline btn-secondary rounded-r-full"
            onClick={() => navigate(`/details/${serviceId}`, { state: { service } })}
          >
            View Details
            <PawPrint className=" w-6 h-6" />
          </button>
          <div className="btn btn-primary rounded-l-full hover:btn-secondary ">
            <FaStar className="w-4 h-4 " />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
