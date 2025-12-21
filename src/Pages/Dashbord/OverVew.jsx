import React from "react";

const OverVew = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">
        Welcome, <span>{user?.displayName}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow text-center">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-xl">{totalUsers}</p>
        </div>

        <div className="p-4 border rounded shadow text-center">
          <h2 className="text-lg font-semibold">Total Donation Requests</h2>
          <p className="text-xl">{totalRequests}</p>
        </div>

        <div className="p-4 border rounded shadow text-center">
          <h2 className="text-lg font-semibold">Total Funds</h2>
          <p className="text-xl">${totalFunds}</p>
        </div>
      </div>
    </div>
  );
};

export default OverVew;
