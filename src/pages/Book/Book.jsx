import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   console.log(book);
  const {
    bookId,
    bookName,
    author,
    image,
    description,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="" style={{ fontFamily: '"Playfair Display", serif' }}>
        <div className="card justify-end bg-base-100 shadow-sm  border border-slate-300 p-6">
          <figure className="p-4 bg-gray-200 w-2/3 mx-auto">
            <img className="h-41.5 object-contain" src={image} alt={bookName} />
          </figure>
          <div className="card-body">
            <div className="">
              {tags.map((tag, index) => (
                <div key={index} className="badge badge-outline mr-2">
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-slate-800 leading-tight mb-1">
              <div className="wrap-normal">{bookName}</div>
            </h2>
            <p className="text-sm font-medium text-slate-500 mb-4">
              by {author}
              <span className="mx-1">•</span>
              {yearOfPublishing}
            </p>

            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              {description}
            </p>

            <div className="border-t border-dashed border-slate-300 pt-4 mt-auto">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-500">
                <div className="flex items-center gap-1">
                  <span>{rating}</span>
                  <span className="text-black-800">★</span>
                </div>
                <span>{totalPages} pgs</span>
                <span className="badge badge-ghost bg-slate-100 border-none">
                  {category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
