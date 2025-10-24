import React from "react";

const FingerprintAnimation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <lord-icon
        src="https://cdn.lordicon.com/urswgamh.json"
        trigger="loop"
        delay="2500"
        state="hover-wrong"
        style={{ width: "200px", height: "200px" }}
      ></lord-icon>
      <h2 className="text-2xl font-semibold mt-6 text-center text-gray-700">
        Secure Login in Progress...
      </h2>
    </div>
  );
};

export default FingerprintAnimation;
