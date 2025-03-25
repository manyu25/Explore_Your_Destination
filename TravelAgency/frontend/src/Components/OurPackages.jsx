import React from "react";
import { useNavigate } from "react-router-dom";
import packageData from "../Assets/Data/Himachal";

const OurPackages = () => {
  const navigate = useNavigate();
  return (
    <div
      id="Packages"
      className="p-10 bg-sky-100 min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packageData.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
          >
            <img
              src={pkg.image1}
              alt={pkg.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl py-3 font-semibold text-gray-900">
              {pkg.name}
            </h3>
            <p className="text-gray-700 text-lg">
              <strong>Price:</strong> ${pkg.Price}
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Duration:</strong> {pkg.No_of_days}
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Places Covered:</strong> {pkg.Destination.join(", ")}
            </p>

            {/* Show More Button */}
            <button
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => navigate(`/packages/${pkg.id}`)}
            >
              Show More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPackages;
