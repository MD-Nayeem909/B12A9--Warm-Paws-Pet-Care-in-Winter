import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="hero bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Keep Your Pets Cozy This Winter
          </h1>
          <p className="text-lg text-blue-800 mb-6">
            Discover the best winter care for your furry friends with our
            curated services and expert tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services.html"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-medium transition duration-300"
            >
              Explore Services
            </Link>
            <Link
              to="/tips.html"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg text-center font-medium border border-blue-200 transition duration-300"
            >
              Winter Tips
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="http://static.photos/pets/640x360/1"
            alt="Happy dog in winter clothes"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
