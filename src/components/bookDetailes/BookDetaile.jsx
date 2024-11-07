import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetaile = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const books = data.find((book) => book.bookId === id);
  console.log("Params bookId:", bookId);
  console.log("Loader data:", data);
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
  } = books || {};
  return (
    <div>
      <div className="flex gap-5 my-14">
        <div className="w-1/2">
          <img src={image} className="" alt="" />
        </div>
        <div className="w-1/2 text-left">
          <h2 className="font-bold text-3xl">{bookName}</h2>
          <h1 className="text-left text-xl mt-3">By : {author}</h1>
          <hr className="my-8" />
          <h1 className="font-bold text-2xl">{category}</h1>
          <p className="my-10">{review}</p>
          <h2 className="card-title">
            Tag :
            {tags.map((tag, index) => (
              <span className="bg-slate-400 rounded-2xl px-4" key={index}>
                #{tag}
              </span>
            ))}
          </h2>
          <hr className="my-8" />
          <div>
            <h1 className="font-bold text-xl flex gap-24">
              Number of Pages:<span className="text-left">{totalPages}</span>
            </h1>
            <h1 className="font-bold text-xl flex gap-24">
              Number of Pages:<span className="">{totalPages}</span>
            </h1>
            <h1 className="font-bold text-xl flex gap-24">
              Number of Pages:<span className="">{totalPages}</span>
            </h1>
          </div>
          <div className="mt-10 flex gap-3">
            <button className="btn btn-outline">Riding Complite</button>
            <button className="btn btn">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetaile;
