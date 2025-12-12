import React from 'react';

const Banner = () => {
    return (
        <div>
                  <section className='h-auto min-h-[500px] bg-[url("https://i.ibb.co/WNQpdWvK/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg")] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-20'>
        <div className="text-center sm:text-left max-w-3xl">
          {/* Heading */}
          <h1 className="  font-bold text-3xl sm:text-4xl lg:text-5xl text-red-900 mb-6">
            SMS-based platform to connect <br className="hidden sm:block" />{" "}
            blood searchers with donors
          </h1>

          {/* Subtext */}
          <p className="  font-semibold text-black  text-sm sm:text-base lg:text-lg mb-8">
            Rokto is a real-time free platform to help blood searchers connect{" "}
            <br className="hidden sm:block" />
            with voluntary blood donors around Bangladesh.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <Link to={'/sign-up'} className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300">
              Join as a Donor
            </Link>
            <Link to={'/search'} className="border-2 border-red-500 text-red-500 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
              Search Donors
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Banner;