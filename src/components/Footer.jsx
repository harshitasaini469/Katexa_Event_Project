import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto bg-black flex flex-col justify-center w-full h-full font-cinzel text-center text-white space-y-3 py-5 ">
      <img src="/logo.png" alt="" className="mx-auto" />
      <p className="text-pink-500 text-xl  font-bold">
        Unlock Memorable Experience
      </p>
      <div className="flex items-center justify-around">
        <div className="space-y-4 font-medium">
          <p>About us</p>
          <p>Blogs</p>
          <p>Terms&Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col space-y-3  items-center">
          <p>Get our Newsletter</p>
          <div className="border-2 border-pink-600 rounded-xl px-2 py-1">
            <input
              type="text"
              className="bg-transparent px-3 py-1 rounded-lg"
              placeholder="your email id please"
            />
            <button className="bg-gradient-to-r from-fuchsia-600  to-pink-600 text-white px-3 py-1 rounded-full">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="space-y-2">
            <p className="font-medium">Contact Us</p>
            <p>+06736238738</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Email ID</p>
            <p>kartexaevents45@gmail,com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4  ">
        <div className="flex justify-between w-7/12  pe-5 me-5 ">
        <div className="flex flex-col   items-center gap-3">
          <div className="flex  gap-4">
            <img src="/Footer/facebook.png" alt="" className="w-10 h-10" />
            <img src="/Footer/instagram.png" alt="" className="w-10 h-10" />
            <img src="/Footer/whatsapp.png" alt="" className="w-10 h-10" />
            <img src="/Footer/twitter.png" alt="" className="w-10 h-10" />
          </div>
          <p className="font-medium">follow us</p>
        </div>

        <div className="space-y-3 pe-5">
          <p className="font-medium">Location</p>
          <p className="">ADvjhskjsakjalksl</p>
        </div>
      </div>
        </div>
        
    </div>
  );
};

export default Footer;
