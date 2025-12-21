import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UseAxios from "../hooks/UseAxios";

const Search = () => {
  const [upazilas, setupazilas] = useState([]);
  const [districts, setdistricts] = useState([]);
  const { register, handleSubmit } = useForm();
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
  const handleSearch = (data) => {
    console.log("form data:", data); // debug

    axiosInstance
      .get("/search-req", {
        params: {
          bloodGroup: data.bloodGroup,
          district: data.district,
          upazila: data.upazila,
        },
      })
      .then((res) => {
        console.log("response:", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      {/* search */}
      <section>
        <div>
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="bg-white shadow-lg rounded-lg p-6 mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
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

            {/* Search Button */}
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Search;
