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
  } = singleBook;

  return (
    <div>
      <p>This is book details.</p>
    </div>
  );
};

export default BookDetails;
