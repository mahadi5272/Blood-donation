import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
const Profile = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const [profile, setProfile] = useState({});
  const [edit, setEdit] = useState(false);

  // 🔹 Load profile data
  useEffect(() => {
    if (!user?.email) return;

    axiosSecure.get(`/users/profile/${user.email}`).then((res) => {
      setProfile(res.data);
    });
  }, [user, axiosSecure]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Save updated profile
  const handleSave = () => {
    const updateData = {
      name: profile.name,
      avatar: profile.avatar,
      district: profile.district,
      upazila: profile.upazila,
      bloodGroup: profile.bloodGroup,
    };

    axiosSecure.patch(`/users/profile/${user.email}`, updateData).then(() => {
      setEdit(false);
      alert("Profile Updated Successfully ✅");
    });
  };
  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow bg-white">
      {/* 🔹 Avatar Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profile.avatar || "https://i.ibb.co/2kRz5y0/default-avatar.png"}
          alt="avatar"
          className="w-32 h-32 rounded-full object-cover border"
        />

        {edit && (
          <input
            type="text"
            name="avatar"
            value={profile.avatar || ""}
            onChange={handleChange}
            placeholder="Avatar Image URL"
            className="input input-bordered w-full mt-3"
          />
        )}
      </div>

      {/* 🔹 Edit Button */}
      {!edit && (
        <button
          onClick={() => setEdit(true)}
          className="btn btn-primary mb-4 w-full"
        >
          Edit Profile
        </button>
      )}

      {/* 🔹 Name */}
      <label className="label">Name</label>
      <input
        name="name"
        value={profile.name || ""}
        onChange={handleChange}
        disabled={!edit}
        className="input input-bordered w-full mb-3"
      />

      {/* 🔹 Email (Read Only) */}
      <label className="label">Email</label>
      <input
        value={profile.email || ""}
        disabled
        className="input input-bordered w-full mb-3 bg-gray-100"
      />

      {/* 🔹 District */}
      <label className="label">District</label>
      <input
        name="district"
        value={profile.district || ""}
        onChange={handleChange}
        disabled={!edit}
        className="input input-bordered w-full mb-3"
      />

      {/* 🔹 Upazila */}
      <label className="label">Upazila</label>
      <input
        name="upazila"
        value={profile.upazila || ""}
        onChange={handleChange}
        disabled={!edit}
        className="input input-bordered w-full mb-3"
      />

      {/* 🔹 Blood Group */}
      <label className="label">Blood Group</label>
      <select
        name="bloodGroup"
        value={profile.bloodGroup || ""}
        onChange={handleChange}
        disabled={!edit}
        className="select select-bordered w-full mb-4"
      >
        <option value="">Select Blood Group</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
      </select>

      {/* 🔹 Save Button */}
      {edit && (
        <button onClick={handleSave} className="btn btn-success w-full">
          Save Changes
        </button>
      )}
    </div>
  );
};

export default Profile;
