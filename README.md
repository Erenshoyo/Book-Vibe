# Book Vibe

Book Vibe is a React-based book tracking application that allows users to browse a curated collection of books, view detailed information, and manage their personal reading lists using local storage. The application features a responsive design and interactive sorting capabilities.

## 🚀 Features

### 📚 Book Discovery

- **Home Page Banner:** A responsive hero section highlighting featured content with a "View The List" call-to-action.
- **Book Feed:** Displays a grid of books loaded from a JSON data source, complete with cover images, tags, titles, authors, and ratings.
- **Loading States:** Implements a circular progress loader while fetching book data.

### 🔍 Detailed Insights

- **Book Details View:** A dedicated dynamic route (`/bookDetails/:id`) providing comprehensive information about a specific book, including:
  - Cover image, Author, and Category.
  - Detailed review/synopsis.
  - Tag clouds (e.g., #Fiction, #Romance).
  - Publication data (Publisher, Year, Page count).
- **Interactive Actions:** Users can mark books as "Read" or add them to a "Wishlist" directly from the details page.

### 📝 List Management & Persistence

- **Local Storage Integration:** User preferences (Read vs. Wishlist) are persisted in the browser's local storage using keys `readList` and `wishList`.
- **Duplicate Prevention:** The system checks if a book is already in a list and triggers a toast warning notification if a user tries to add it again.
- **Tabbed Interface:** The "Listed Books" page uses `react-tabs` to switch between the "Read" list and "Wishlist".

### ⚡ Sorting & Filtering

- **Sort Functionality:** Users can sort their reading lists dynamically by:
  - **Ratings:** Highest to lowest.
  - **Pages:** Ascending order.
  - **Published Year:** Based on publication date.

## 🛠 Tech Stack

- **Frontend Framework:** React (v18+).
- **Routing:** React Router DOM (includes `createBrowserRouter`, `RouterProvider`, `Outlet`).
- **Styling:** \* Tailwind CSS (inferred from class names like `text-4xl`, `flex`, `grid-cols-3`).
  - DaisyUI (inferred from component classes like `btn`, `navbar`, `card`, `badge`).
  - **Fonts:** Playfair Display (via `@fontsource/playfair-display`).
- **Icons:** \* Lucide React (`Calendar`, `UserRound`, `StickyNote`).
  - [cite_start]Heroicons (SVG paths embedded in components)[cite: 1].
- **Utilities:**
  - `react-toastify`: For success/warning notifications.
  - `react-loader-spinner`: For loading animations.
  - `react-tabs`: For accessible tab components.
- **Deployment Config:** Contains a `_redirects` file configured for Single Page Application (SPA) routing (likely for Netlify).

## 📂 Project Structure

```text
src/
├── assets/                  # Images (e.g., pngwing 1.png)
├── components/
│   ├── Banner/             # Home page hero section
│   ├── Book/               # Individual book card component
│   ├── Books/              # Grid container for book cards
[cite_start]│   ├── Footer/             # Application footer [cite: 1]
│   ├── Header/             # Navbar component
│   ├── Loader/             # Spinner component
│   ├── ReadBookDetails/    # Card item for 'Read' list
│   └── WishListBookDetails/# Card item for 'Wishlist'
├── pages/
│   ├── BookDetails/        # Dynamic detailed view
│   ├── ErrorPage/          # 404 Not Found handling
│   ├── Home/               # Main landing page
│   ├── PagesToRead/        # Charts/Analytics page
│   ├── ReadList/           # Tabbed list view
│   └── Root/               # Main layout wrapper
├── Routes/
│   └── Routes.jsx          # Router configuration
├── utilities/
│   └── addToDB.js          # LocalStorage helper functions
├── booksData.json          # Mock database of books
├── App.jsx                 # Base App component
└── main.jsx                # Entry point
```
