import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  //   console.log(id);
  const data = useLoaderData();
  const singleBook = data?.find((book) => book.bookId === intId);

  if (!singleBook) return <h2>Book not found.</h2>;

  const {
    bookName,
    author,
    review,
    image,
    publisher,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = singleBook;

  return (
    <div
      className="flex h-screen p-8 items-center justify-center gap-20 overflow-hidden"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      <img
        className="h-full object-contain p-30 bg-slate-100 rounded-xl"
        src={image}
        alt={bookName}
      />
      <div>
        <h1 className="text-5xl font-bold mb-5">{bookName}</h1>
        <p className="text-lg font-semibold mb-4">By : {author}</p>
        <div className="border-b border-slate-300"></div>
        <p className="my-4 text-lg">{category}</p>
        <div className="border-b border-slate-300"></div>
        <p className="my-8">
          <strong>Review: </strong> {review}
        </p>
        <div className="flex gap-4 mb-8">
          <h3>
            <strong>Tag</strong>
          </h3>
          <div>
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline mr-2">
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-slate-300"></div>
        <div className="mt-10 flex flex-col gap-4">
          {/* Number of Pages */}
          <div className="flex items-center gap-5">
            {/* w-40 creates a fixed width column so the values align perfectly */}
            <span className="w-60 text-gray-500">Number of Pages:</span>
            <span className="font-bold text-gray-900">{totalPages}</span>
          </div>

          {/* Publisher */}
          <div className="flex items-center gap-5">
            <span className="w-60 text-gray-500">Publisher:</span>
            <span className="font-bold text-gray-900">{publisher}</span>
          </div>

          {/* Year of Publishing */}
          <div className="flex items-center gap-5">
            <span className="w-60 text-gray-500">Year of Publishing:</span>
            <span className="font-bold text-gray-900">{yearOfPublishing}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-5">
            <span className="w-60 text-gray-500">Rating:</span>
            <span className="font-bold text-gray-900">{rating}</span>
          </div>

          {/* Divider line (if you still want it) */}
          {/* <div className="border-b border-slate-300 mt-4"></div> */}
        </div>
        <div className="mt-8 flex gap-4">
          <button className="btn btn-ghost border-slate-300 hover:border-[#23BE0A]">Read</button>
          <button className="btn bg-[#2cbac9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
