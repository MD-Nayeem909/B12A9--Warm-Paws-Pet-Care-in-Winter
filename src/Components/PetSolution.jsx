import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useService from "./CustomHooks/useService";
import { ChevronsRight } from "lucide-react";
import { Link } from "react-router";

const PetSolution = ({ isVisible = "", pageName = "" }) => {
  const { data, loading } = useService();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredData(filtered);
    }
  }, [selectedCategory, data]);

  useEffect(() => {
    if (data?.length > 0) {
      localStorage.setItem("services", JSON.stringify(data));
    }
  }, [data]);

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="mb-16">
      <section className="">
        <div className={`mb-12 text-primary text-center ${isVisible}`}>
          <h2 className="text-3xl font-bold mb-4 ">
            Popular Winter Care Services
          </h2>
          <p className="text-xl">
            Everything your pet needs to stay comfortable and healthy during the
            cold season
          </p>
        </div>
      </section>
      <section>
        <div className="bg-base-200 shadow-md rounded-lg py-4 px-8 mb-6">
          <h3 className="text-sm text-primary font-semibold mb-3">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white border-[#1e3a8a]"
                    : "bg-base-100 border-gray-300 hover:bg-linear-to-r from-indigo-500 to-purple-500 hover:text-white transition duration-700 ease-in-out"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-infinity opacity-70 loading-xl w-[100px]"></span>
        </div>
      ) : (
        <section>
          <div>
            <h2 className="text-xl font-bold mb-4">
              Showing <span>{filteredData.length}</span> services
            </h2>
          </div>

          {/* Service Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-200 p-8">
            {filteredData.length > 0 ? (
              filteredData.map((service, index) => {
                if (pageName && index < 6) {
                  return (
                    <ServiceCard key={service.serviceId} service={service} />
                  );
                }
                if (!pageName) {
                  return (
                    <ServiceCard key={service.serviceId} service={service} />
                  );
                }
              })
            ) : (
              <p className="text-center text-gray-500">
                No services available.
              </p>
            )}
          </div>
        </section>
      )}

      <Link
        to="/services"
        className={`bg-primary mx-auto rounded-full h-15 w-15 flex justify-center items-center mt-16 ${isVisible}`}
      >
        <ChevronsRight className="text-white" size={40} />
      </Link>
    </div>
  );
};

export default PetSolution;
