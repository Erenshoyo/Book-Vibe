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
        {allBooks.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </Suspense>
    </div>
  );
};

export default Books;
