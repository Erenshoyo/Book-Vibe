import React from "react";
import { Calendar, UserRound, StickyNote } from "lucide-react";
const WishListBookDetails = ({ b }) => {
  if (!b) return null;

  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags = [],
    publisher,
    yearOfPublishing,
  } = b;

  return (
    <div className="flex flex-row border border-slate-200 p-4 md:p-6 my-4 rounded-2xl gap-4 md:gap-8 bg-white items-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-1/4 min-w-30 md:w-1/3 md:max-w-57.5 aspect-3/4 shrink-0 bg-slate-100 rounded-xl flex items-center justify-center p-4 md:p-8">
        <img
          className="h-full w-full object-contain drop-shadow-md"
          src={image}
          alt={bookName}
        />
      </div>

      <div className="flex-1 min-w-0 py-1">
        <h1
          className="text-lg md:text-3xl font-bold text-slate-900 truncate"
          title={bookName}
        >
          {bookName}
        </h1>
        <p className="text-sm md:text-lg font-medium text-slate-700 mb-2 md:mb-4">
          By: {author}
        </p>

        {/* Info Row: Wrap on small screens, side-by-side on large */}
        <div className="flex flex-col xl:flex-row xl:items-center gap-2 md:gap-4 mb-3 md:mb-5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="font-bold text-xs md:text-base">Tags</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="whitespace-nowrap rounded-full bg-green-50 text-[#23BE0A] text-[10px] md:text-xs font-semibold px-2 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-[10px] md:text-sm">
            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
            <span>Published: {yearOfPublishing}</span>
          </div>
        </div>

        {/* Secondary Details */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-slate-500 mb-3 md:mb-6">
          <span className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm">
            <UserRound className="w-3 h-3 md:w-4 md:h-4" /> {publisher}
          </span>
          <span className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm">
            <StickyNote className="w-3 h-3 md:w-4 md:h-4" /> {totalPages} Pages
          </span>
        </div>

        <hr className="hidden md:block border-slate-100 mb-6" />

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="px-2 md:px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] md:text-sm font-medium">
            {category}
          </span>
          <span className="px-2 md:px-4 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] md:text-sm font-medium">
            ★ {rating}
          </span>
          <button className="ml-auto md:ml-0 px-3 md:px-6 py-1.5 md:py-2 rounded-full bg-[#23BE0A] text-white text-[10px] md:text-sm font-bold hover:bg-green-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListBookDetails;
