import React from "react";
import bookImage from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-60 bg-gray-200 py-24 rounded-4xl">
      <div className="w-150">
        <h1
          className="text-7xl font-bold mb-14"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] text-white font-bold text-lg p-7 rounded-xl">View The List</button>
      </div>
      <img src={bookImage} alt="" className="w-120"/>
    </div>
  );
};

export default Banner;
