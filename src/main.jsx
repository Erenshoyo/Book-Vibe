import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes.jsx";
// Defaults to weight
import "@fontsource/playfair-display";
// Optional: Add specific weights (e.g., 700 for bold)
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
// Optional: Italic styles
import "@fontsource/playfair-display/400-italic.css";
import Loader from "./components/Loader/Loader.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
