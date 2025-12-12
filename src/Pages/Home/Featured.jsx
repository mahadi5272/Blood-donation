import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="bg-red-50 py-12 px-4 sm:px-6 lg:px-20">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-red-700 mb-12">
          Featured Highlights
        </h2>

        {/* Cards Container */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Impact */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-red-600 text-5xl mb-4">❤️</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-3">
              Impact of Blood Donation
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              1 Unit of Blood Can Save 3 Lives. Last year, over 50,000 people
              were helped through donations.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm sm:text-base">
              Learn More
            </button>
          </div>

          {/* Card 2 - Eligibility */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-red-600 text-5xl mb-4">🩸</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-3">
              Who Can Donate
            </h3>
            <ul className="text-gray-700 mb-4 space-y-2 text-sm sm:text-base">
              <li>✅ Age: 18-60 years</li>
              <li>✅ Weight: ≥50kg</li>
              <li>✅ Healthy & no major illness</li>
            </ul>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm sm:text-base">
              Register Now
            </button>
          </div>

          {/* Card 3 - Upcoming Camps */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-red-600 text-5xl mb-4">📅</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-3">
              Upcoming Blood Donation Camps
            </h3>
            <ul className="text-gray-700 mb-4 space-y-2 text-sm sm:text-base">
              <li>📍 Dhaka, 20 Dec 2025</li>
              <li>📍 Chittagong, 25 Dec 2025</li>
              <li>📍 Sylhet, 30 Dec 2025</li>
            </ul>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm sm:text-base">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
