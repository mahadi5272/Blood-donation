import React from "react";

const TotalBloodDonet = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Total Blood Donation Requests: {requests.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Recipient</th>
              <th>District</th>
              <th>Blood Group</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.recipientName}</td>
                <td>{item.recipientDistrict}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.donationDate}</td>
                <td className="capitalize">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalBloodDonet;
