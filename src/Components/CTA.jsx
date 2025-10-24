import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white rounded-xl shadow-md text-center px-4 py-12 mb-12">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Winterize Your Pet Care?
      </h2>
      <p className="text-xl mb-6 max-w-2xl mx-auto">
        Join thousands of pet owners keeping their companions cozy all season
        long.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/auth/register"
          className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-center font-medium transition duration-300"
        >
          Sign Up Free
        </Link>

        <Link
          to = "/auth/login"
          className="bg-transparent hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center font-medium border border-white transition duration-300"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default CTA;
