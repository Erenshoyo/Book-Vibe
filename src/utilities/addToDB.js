import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const getStoredReadBook = () => {
  const storedBooksString = localStorage.getItem("readList");

  if (storedBooksString) {
    const storedBookData = JSON.parse(storedBooksString);
    return storedBookData;
  } else {
    return [];
  }
};

export const getStoredWishListBook = () => {
  const storedBooksString = localStorage.getItem("wishList");

  if (storedBooksString) {
    const storedBookData = JSON.parse(storedBooksString);
    return storedBookData;
  } else {
    return [];
  }
};

export const addToStoredReadDB = (id, bookName) => {
  const storedBookData = getStoredReadBook();
  if (storedBookData.includes(id)) {
    toast.warn(`${bookName} is marked as Read.`);
  } else {
    storedBookData.push(id);
    toast.success(`${bookName} is already marked as Read.`);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    console.log(storedBookData);
  }
};

export const addToStoredWishlistDB = (id, bookName) => {
  const storedBookData = getStoredWishListBook();
  if (storedBookData.includes(id)) {
    toast.warn(`${bookName} is already added to the wishlist.`);
  } else {
    storedBookData.push(id);
    toast.success(`${bookName} is added to the wishlist`);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("wishList", data);
    console.log(storedBookData);
  }
};
