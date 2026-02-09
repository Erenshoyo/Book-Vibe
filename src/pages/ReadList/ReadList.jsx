import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router"; // Removed Link
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredReadBook,
  getStoredWishListBook,
} from "../../utilities/addToDB";
import ReadBookDetails from "../ReadBookDetails/ReadBookDetails";
import WishListBookDetails from "../WishListBookDetails/WishListBookDetails";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredReadBook();
    const wishlistedBookData = getStoredWishListBook();

    // Parse IDs
    const readIDs = new Set(storedBookData.map((book) => parseInt(book, 10)));
    const wishIDs = new Set(
      wishlistedBookData.map((book) => parseInt(book, 10)),
    );

    // Filter data
    const filteredReadList = data.filter((book) => readIDs.has(book.bookId));
    const filteredWishList = data.filter((book) => wishIDs.has(book.bookId));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReadList(filteredReadList);
    setWishList(filteredWishList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Ratings") {
      const sortedByRatings = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRatings);
      setWishList(sortedByRatings);
    }
    if (type === "Pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(sortedByPages);
      setWishList(sortedByPages);
    }
    if (type === "Publisher") {
      const sortedByPublisher = [...readList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing,
      );
      setReadList(sortedByPublisher);
      setWishList(sortedByPublisher);
    }
  };

  return (
    <div style={{ fontFamily: '"Playfair Display", serif' }}>
      <div className="flex justify-center">
        <div className="dropdown dropdown-right">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Sort By {sort ? `: ${sort}` : ""}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Publisher")}>Published</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center">Read Books: {readList.length}</h2>
          {readList.map((b) => (
            <ReadBookDetails key={b.bookId} b={b}></ReadBookDetails>
          ))}
        </TabPanel>

        <TabPanel>
          <h2 className="text-center">Wishlist: {wishList.length}</h2>
          {wishList.map((b) => (
            <WishListBookDetails key={b.bookId} b={b}></WishListBookDetails>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
