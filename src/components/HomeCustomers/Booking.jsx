import React from "react";

const Booking = () => {
  return (
    <div className="mt-32 relative">
      <img src="HomeCustomers/bookings.png" alt="" className="w-72 absolute z-20 left-8 -top-20 " />

      <div className="relative z-10 top-4 w-10/12 mx-auto  border-1 border-pink-300 mt-24 font-cinzel  flex flex-col space-y-8 items-center justify-center h-96 rounded-lg">
        <div className="text-3xl text-white flex  items-center text-center">
            <p className="w-2/12 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-pink-600 ">Grab your tickets now</p>
          <p className="w-5/12 mx-auto font-semibold mt-auto ">our next event booking will start  in:</p>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-24 text-2xl text-black font-bold">
          <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 w-48 h-40 flex items-center justify-center rounded-2xl  ">
            <p>4 days</p>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 w-48 h-40 flex items-center justify-center rounded-2xl">
            <p>2 hours</p>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-700 to-pink-600 w-48 h-40 flex items-center justify-center rounded-2xl">
            <p>36 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
