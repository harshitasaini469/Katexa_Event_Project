import React from "react";

const EventCard = ({ bg, title, desc }) => {
  const cardStyle = {
    height: "100%", 
  };

  const imgStyle = {
    height: "100%", 
    objectFit: "cover", 
  };

  return (
    <div className="card text-white font-cinzel w-fit bg-transparent cursor-pointer" style={cardStyle}>
      <img src={bg} className="card-img rounded-2xl" alt="..." style={imgStyle} />
      <div className="card-img-overlay text-center w-full px-0 py-0 flex flex-col justify-end gap-2">
        <h5 className="card-title text-4xl font-semibold">{title}</h5>
        <div className="bg-black/25 w-full h-24 flex items-center justify-center ">
        <p className="card-text text-xl font-medium">{desc}</p>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
