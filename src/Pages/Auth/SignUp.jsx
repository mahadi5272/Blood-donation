import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAxios from "../../hooks/UseAxios";
const SignUp = () => {
  const [upazilas, setupazilas] = useState([]);
  const [districts, setdistricts] = useState([]);
  const { registerUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosInstance = UseAxios();
  useEffect(() => {
    axios.get("/districts.json").then((res) => {
      console.log(res);
      setdistricts(res.data.districts);
    });
    axios.get("/upazilas.json").then((res) => {
      console.log(res);
      setupazilas(res.data.upazilas);
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    try {
      // 1️⃣ Firebase Register
      await registerUser(data.email, data.password);

      // 2️⃣ Upload image to ImageBB
      const formData = new FormData();
      formData.append("image", data.photo[0]);

      const image_API_URL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host_key
      }`;
      const imageRes = await axios.post(image_API_URL, formData);
      const photoURL = imageRes.data.data.url;

      // 4️⃣ Save user to MongoDB
      const userInfo = {
        name: data.name,
        email: data.email,
        avatar: photoURL,
        bloodGroup: data.bloodGroup,
        district: data.district,
        upazila: data.upazila,
      };
      console.log(userInfo);

      await axiosInstance.post("/users", userInfo);

      navigate(location.state?.from || "/");
      // 3️⃣ Update Firebase Profile
      await updateUserProfile({
        displayName: data.name,
        photoURL,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          {/* Photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
          />
          {errors.photo && <p className="text-red-500">Photo is required</p>}

          {/* Blood Group */}
          <label className="label">Blood Group</label>
          <select
            {...register("bloodGroup", { required: true })}
            className="select"
          >
            <option value="">Select Blood Group</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>

          {/* District */}
          <label className="label">District</label>
          <select
            {...register("district", { required: true })}
            className="select"
          >
            {districts.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <label className="label">Upazila</label>
          <select
            {...register("upazila", { required: true })}
            className="select"
          >
            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.name}>
                {upazila.name}
              </option>
            ))}
          </select>

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
          />

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password must be 6 characters</p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
