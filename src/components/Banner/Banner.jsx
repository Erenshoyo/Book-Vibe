import React from "react";
import bookImage from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div
      style={{ fontFamily: '"Playfair Display", serif' }}
      className="bg-gray-200 rounded-3xl lg:rounded-[40px] px-8 py-12 lg:py-20"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Books to freshen up <br className="hidden lg:block" /> your
            bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] hover:bg-[#1e9e08] border-none text-white font-bold text-lg px-8 py-4 h-auto min-h-0 rounded-xl transition-colors">
            View The List
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-2/5 flex justify-center">
          <img
            src={bookImage}
            alt="Featured Book"
            className="w-full max-w-75 lg:max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
