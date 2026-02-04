import React, { Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div>
      <h1
        className="text-4xl text-center mt-24"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Books
      </h1>

      <Suspense
        fallback={
          <span>
            <Loader></Loader>
          </span>
        }
      >
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          {allBooks.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
