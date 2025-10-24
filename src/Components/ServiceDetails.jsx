import React, { useEffect, useState } from "react";
import { Mail, Star, Home } from "lucide-react";
import { Link, useLocation, useParams } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceDetails = () => {
  const location = useLocation();
  const params = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (location.state?.service) {
      setService(location.state.service);
    } else {
      const storedServices = JSON.parse(localStorage.getItem("services"));
      if (storedServices) {
        const found = storedServices.find(
          (item) => item.serviceId === Number(params.id)
        );
        setService(found);
      }
    }
  }, [location.state, params.id]);
  if (!service) {
    return <div className="text-center text-gray-500 mt-10">No data found</div>;
  }
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
      </header>
      <section className="min-h-[calc(100vh-300.86px)] flex justify-center items-center">
        <div className="max-w-3xl mx-auto bg-base-100 shadow-md rounded-2xl overflow-hidden mt-10">
          {/* Image */}
          <div className="relative">
            <img
              src={service?.image}
              alt={service?.serviceName}
              className="w-full h-90 object-cover"
            />
            <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              {service.serviceName}
            </h1>
            <p className="text-sm text-gray-500">{service.providerName}</p>

            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="font-semibold">{service.rating}</span>
              <span className="text-gray-400">(user ratings)</span>
            </div>

            {/* Price & Slot Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
              <div className="bg-base-200 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500">Price</p>
                <p className="font-semibold text-gray-800">${service.price}</p>
              </div>
              <div className="bg-base-200 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500">Slots Available</p>
                <p className="font-semibold text-gray-800">
                  {service.slotsAvailable}
                </p>
              </div>
              <div className="bg-base-200 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500">Category</p>
                <p className="font-semibold text-gray-800">
                  {service.category}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
              <Mail className="w-4 h-4 text-rose-600" />
              <span className="text-sm text-gray-600">
                {service.providerEmail}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Link to="/" className="btn btn-outline btn-rose w-1/2 mr-2">
                <Home className="w-4 h-4 mr-2" /> Back to Home
              </Link>
              <button className="btn bg-rose-600 hover:bg-rose-700 text-white w-1/2">
                Book Service
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ServiceDetails;
