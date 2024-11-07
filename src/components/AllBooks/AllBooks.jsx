import React, { useEffect, useState } from "react";
import Book from "./Book";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl mt-16 mb-16">
        Books : {allBooks.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allBooks.map((book) => (
          <Book book = {book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
