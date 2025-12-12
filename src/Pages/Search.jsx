import React from "react";

const Search = () => {
  return (
    <div>
      {/* search */}
      <section>
        <div>
          <form className="bg-white shadow-lg rounded-lg p-6 mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Blood Group */}
            <select className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            {/* District */}
            <select className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500">
              <option value="">Select District</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Khulna">Khulna</option>
            </select>

            {/* Upazila */}
            <select className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500">
              <option value="">Select Upazila</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Mirpur">Mirpur</option>
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
