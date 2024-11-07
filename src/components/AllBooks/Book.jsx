import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 border border-gray-300 w-full ">
        <figure>
          <img className="h-48" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {tags.map((tag, index) => (
              <span className="bg-slate-400 rounded-2xl px-4" key={index}>
                {tag}
              </span>
            ))}
          </h2>
          <h1 className="text-2xl text-left font-bold">{bookName}</h1>
          <h1 className="text-left text-xl font-bold">By : {author}</h1>
          <hr className="border-dashed mt-2" />
          <div className="flex justify-between mt-2">
            <div className="text-lg font-bold">{category}</div>
            <div className="flex items-center gap-1 text-lg font-bold">
              25$ <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
