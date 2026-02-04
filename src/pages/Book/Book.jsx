import React from "react";

const Book = ({ book }) => {
  //   console.log(book);
  const {
    bookName,
    author,
    image,
    description,

    rating,
    category,
    tags,
  } = book;
  return (
    <div className="" style={{ fontFamily: '"Playfair Display", serif' }}>
      <div className="card justify-end bg-base-100 shadow-sm  border border-slate-300 p-6">
        <figure className="p-4 bg-gray-200 w-2/3 mx-auto">
          <img className="h-41.5 object-contain" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <h1 className="text-[14px]">{author}</h1>
          <h2 className="card-title text-[18px] justify-between">
            <div className="wrap-normal">{bookName}</div>
            <div className="">
              {tags.map((tag, index) => (
                <div key={index} className="badge badge-outline mr-2">
                  {tag}
                </div>
              ))}
            </div>
          </h2>

          <p className="">{description}</p>

          <div className="card-actions justify-end border-t border-dashed pt-6 font-semibold text-slate-500">
            <p>Ratings:{rating}</p>
            <div>{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
