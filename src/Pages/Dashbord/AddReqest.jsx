import React from 'react';

const AddReqest = () => {
  return (
    <div>
          <div className="card bg-base-100 w-full max-w-lg mx-auto shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className="text-xl font-bold text-center mb-4">
          Create Donation Request
        </h2>

        {/* Requester Name */}
        <label className="label">Requester Name</label>
        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered"
        />

        {/* Requester Email */}
        <label className="label">Requester Email</label>
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered"
        />

        {/* Recipient Name */}
        <label className="label">Recipient Name</label>
        <input
          {...register("recipientName", { required: true })}
          className="input input-bordered"
        />
        {errors.recipientName && (
          <p className="text-red-500">Recipient name is required</p>
        )}

        {/* District */}
        <label className="label">Recipient District</label>
        <select
          {...register("district", { required: true })}
          className="select select-bordered"
        >
          <option value="">Select District</option>
          {districts.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <label className="label">Recipient Upazila</label>
        <select
          {...register("upazila", { required: true })}
          className="select select-bordered"
        >
          <option value="">Select Upazila</option>
          {upazilas.map((u) => (
            <option key={u.id} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>

        {/* Hospital */}
        <label className="label">Hospital Name</label>
        <input
          {...register("hospitalName", { required: true })}
          className="input input-bordered"
        />

        {/* Full Address */}
        <label className="label">Full Address</label>
        <input
          {...register("fullAddress", { required: true })}
          className="input input-bordered"
        />

        {/* Blood Group */}
        <label className="label">Blood Group</label>
        <select
          {...register("bloodGroup", { required: true })}
          className="select select-bordered"
        >
          <option value="">Select Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        {/* Date */}
        <label className="label">Donation Date</label>
        <input
          type="date"
          {...register("donationDate", { required: true })}
          className="input input-bordered"
        />

        {/* Time */}
        <label className="label">Donation Time</label>
        <input
          type="time"
          {...register("donationTime", { required: true })}
          className="input input-bordered"
        />

        {/* Message */}
        <label className="label">Request Message</label>
        <textarea
          {...register("requestMessage", { required: true })}
          className="textarea textarea-bordered"
          rows="4"
        ></textarea>

        <button className="btn btn-neutral mt-4">
          Request
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddReqest;