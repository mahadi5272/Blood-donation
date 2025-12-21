import React from "react";
import   { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { HiOutlineDotsVertical } from "react-icons/hi";

const AllUsers = () => {
    const [users, setusers] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const fecthUser = () => {
    axiosSecure.get("/users").then((res) => {
      setusers(res.data);
    });
  };
  console.log(users);
  useEffect(() => {
    fecthUser();
  }, [axiosSecure]);
  const handleStatusChange = (email, status) => {
    // Implement the logic to update user status
    axiosSecure
      .patch(`/update/user/status?email=${email}&status=${status}`)
      .then((res) => {
        console.log(res.data);
        fecthUser();
      });
  };
  const handleRoleChange = (email, role) => {
    axiosSecure
      .patch(`/update/user/role?email=${email}&role=${role}`)
      .then((res) => {
        console.log("Role updated:", res.data);
        fecthUser(); // UI refresh
      })
      .catch((err) => {
        console.error("Role update failed:", err);
      });
    }
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
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.avatar}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.email}</div>
                      <div className="text-sm opacity-50">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.role}
                  <br />
                </td>
                <td>{user?.status}</td>
                <td>
                  <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="" className=" m-1">
                      <HiOutlineDotsVertical />
                    </div>

                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow"
                    >
                      <li>
                        {user?.status === "Active" ? (
                          <button
                            onClick={() =>
                              handleStatusChange(user?.email, "block")
                            }
                            className="btn btn-sm"
                          >
                            Block
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm"
                            onClick={() =>
                              handleStatusChange(user?.email, "Active")
                            }
                          >
                            Active
                          </button>
                        )}
                      </li>
                      {user?.role === "donor" ? (
                        <li>
                          <button
                            onClick={() =>
                              handleRoleChange(user?.email, "Volunteer")
                            }
                            className="btn btn-sm"
                          >
                            Make Volunteer
                          </button>
                        </li>
                      ) : (
                        <li>
                          <button
                            onClick={() =>
                              handleRoleChange(user?.email, "donor")
                            }
                            className="btn btn-sm"
                          >
                            Make Donor
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </td>
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
    </div>
  );
};

export default AllUsers;
