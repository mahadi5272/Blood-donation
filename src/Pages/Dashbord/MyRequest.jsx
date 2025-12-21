import React from "react";

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState(0);
  const [MyRequest, setmyRequest] = useState([]);
  const [itemParPage, setItemParPage] = useState(10);
  const [currerntPage, setCurrerntPage] = useState(1);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/my-request?page=${currerntPage - 1} size=${itemParPage}`)
      .then((res) => {
        setmyRequest(res.data.request);
        setTotalRequest(res.data.totalReqest);
      });
  }, [axiosSecure, currerntPage, itemParPage]);
  const numberOfPage = Math.ceil(totalRequest / itemParPage);
  const pages = [...Array(numberOfPage).keys()].map((e) => e + 1);

  const handlePrev = () => {
    if (currerntPage > 1) {
      setCurrerntPage(currerntPage + 1);
    }
  };
  const handleNext = () => {
    if (currerntPage < pages.length) {
      setCurrerntPage(currerntPage + 1);
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {MyRequest.map((req, ind) => (
              <tr>
                <th>{ind + 1}</th>
                <th>{req.requesterEmail}</th>
                <th>{req.recipientName}</th>
                <th>{req.hospitalName}</th>
                <th>{req.bloodGroup}</th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <button onClick={handlePrev} className="btn">
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={`btn ${
              page === currerntPage ? "bg-green-800 text-white" : ""
            }`}
            onClick={() => setCurrerntPage(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default MyRequest;
