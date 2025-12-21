import React from "react";

const OverVew = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  // Beginner-friendly state
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalFunds, setTotalFunds] = useState(0);

  // Load data from server
  useEffect(() => {
    axiosSecure
      .get("/dashboard/overview")
      .then((res) => {
        // Server থেকে data fetch করে state update করা
        setTotalUsers(res.data.totalUsers);
        setTotalRequests(res.data.totalRequests);
        setTotalFunds(res.data.totalFunds);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure]);
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
