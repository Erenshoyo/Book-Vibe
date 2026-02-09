import React from "react";
import { useLoaderData, useParams } from "react-router";
import {
  addToStoredReadDB,
  addToStoredWishlistDB,
} from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id, 10);
  const data = useLoaderData();
  const singleBook = data?.find((book) => book.bookId === intId);

  if (!singleBook)
    return <h2 className="text-center mt-10 text-2xl">Book not found.</h2>;

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
  const bName = bookName;
  const renderInfoRow = (label, value) => (
    <div className="flex items-center gap-5">
      <span className="w-40 text-gray-500">{label}</span>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );

  const handleRead = (id, bName) => {
    addToStoredReadDB(id, bName);
  };

  const handleWishList = (id, bName) => {
    addToStoredWishlistDB(id, bName);
  };

  return (
    <div
      className="min-h-screen p-8 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      <img
        className="w-full lg:w-180 object-contain p-8 lg:p-30 bg-slate-100 rounded-xl"
        src={image}
        alt={bookName}
      />
      <div className="flex-1">
        <h1 className="text-4xl lg:text-5xl font-bold mb-5">{bookName}</h1>
        <p className="text-lg font-semibold mb-4">By : {author}</p>
        <div className="border-b border-slate-300"></div>
        <p className="my-4 text-lg">{category}</p>
        <div className="border-b border-slate-300"></div>
        <p className="my-8 text-gray-700 leading-relaxed">
          <strong className="text-black">Review: </strong> {review}
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <h3 className="font-bold">Tag</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="badge badge-outline text-[#23BE0A] bg-green-50"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-slate-300"></div>

        <div className="mt-10 flex flex-col gap-4">
          {renderInfoRow("Number of Pages", totalPages)}
          {renderInfoRow("Publisher", publisher)}
          {renderInfoRow("Year of Publishing", yearOfPublishing)}
          {renderInfoRow("Ratings", rating)}
        </div>
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => handleRead(id, bName)}
            className="btn btn-ghost border-slate-300 hover:bg-[#23BE0A] hover:text-white hover:border-[#23BE0A]"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(id, bName)}
            className="btn bg-[#2cbac9] hover:bg-[#249aa7] text-white px-6"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
