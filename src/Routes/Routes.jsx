import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About"; // Import if needed
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/readList",
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
        Component: ReadList,
        // Removed the "children" array entirely
      },
      {
        path: "/bookDetails/:id",
        loader: async () => {
          const response = await fetch("/booksData.json");
          return response.json();
        },
        Component: BookDetails,
      },
    ],
  },
]);
