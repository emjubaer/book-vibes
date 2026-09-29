# Book Vibe

Book Vibe is a responsive book discovery and reading-tracker web application. It gives readers a simple way to explore a curated catalog, inspect book metadata, keep a personal “read” list, and save books to a wishlist.

The project is built as a frontend-focused Next.js application. Book information is served from a local JSON file, while the read and wishlist collections are managed in React context for the current browser session.

## Purpose

This project was created to provide a clean, practical reading companion with:

- A welcoming home page and featured book collection
- A complete catalog for browsing all available books
- Detailed pages for reviewing book information before making a choice
- Separate read and wishlist collections
- Sorting and lightweight reading-progress visualization

It is also a demonstration of building a typed, component-based interface with the Next.js App Router, responsive Tailwind CSS styling, shared React state, and chart rendering.

## Features

### Discovery and book details

- Responsive landing page with a hero section and popular-book showcase
- Full catalog at `/books`
- Reusable book cards with cover, title, author, category, tags, and rating
- Dynamic detail pages at `/books/[id]`
- Book metadata including review, page count, publisher, publication year, rating, and tags
- Optimized image rendering with `next/image`
- Friendly “Book Not Found” state for an invalid book ID

### Reading lists

- Mark a book as **Read**
- Add a book to the **Wishlist**
- View both collections from `/listed-books`
- Switch between Read Books and Wishlist Books tabs
- Sort the active list by rating, number of pages, or publication year
- Toast notifications after adding a book to either list

### Reading visualization

- Read-books page at `/read-books`
- Responsive bar chart showing the number of pages for each read book
- Empty state when no books have been marked as read

### Responsive interface

- Desktop navigation with active-route styling
- Mobile dropdown navigation
- Responsive catalog grids and detail layouts
- Consistent visual system using DaisyUI/Tailwind utility classes

## Technology Stack

| Technology | Role |
| --- | --- |
| [Next.js](https://nextjs.org/) 16 | React framework, App Router, routing, and production builds |
| [React](https://react.dev/) 19 | UI components and client-side interactivity |
| [TypeScript](https://www.typescriptlang.org/) | Static typing for application code and book data |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Utility-first styling |
| [DaisyUI](https://daisyui.com/) 5 | UI component classes and light theme |
| [Recharts](https://recharts.org/) | Read-books page visualization |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Success notifications |
| `next/image` | Local and remote image optimization |

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Home page with hero banner and six featured books |
| `/books` | Full catalog of all books in `public/booksData.json` |
| `/books/[id]` | Detailed view for a specific book |
| `/listed-books` | Read and wishlist collections with sorting |
| `/read-books` | Bar chart of pages in the read collection |

## How It Works

### Data

The catalog is stored in [`public/booksData.json`](./public/booksData.json). Each book follows the `IBook` shape defined in [`src/types/bookTypes.tsx`](./src/types/bookTypes.tsx), including:

- `bookId`, `bookName`, `author`, and `image`
- `review`, `totalPages`, and `rating`
- `category`, `tags`, `publisher`, and `yearOfPublishing`

Catalog pages fetch this public JSON resource. Remote cover images are supported for the configured `i.ibb.co.com` hostname in [`next.config.ts`](./next.config.ts).

### Client state

[`BooksContext`](./src/app/context/BooksContext.tsx) provides `readBooks` and `wishList` state to the application. The state is held in memory, so it resets when the page is refreshed or the browser session is restarted. There is currently no database, API, authentication flow, or browser persistence layer.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm (the repository includes `package-lock.json`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emjubaer/book-vibes.git
   cd book-vibes
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

No environment variables are required for the current local-data implementation.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm start` | Serves the production build locally |
| `npm run lint` | Runs the configured ESLint checks |

To test the production build locally:

```bash
npm run build
npm start
```

## Project Structure

```text
book-vibes/
├── public/
│   └── booksData.json              # Local book catalog
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   ├── [id]/page.tsx      # Book details route
│   │   │   └── page.tsx            # Full catalog route
│   │   ├── components/
│   │   │   ├── book-details/       # Read and wishlist actions
│   │   │   ├── homePage/           # Hero and featured books
│   │   │   └── shared/             # Navbar, cards, and toast provider
│   │   ├── context/                # Shared reading-list state
│   │   ├── listed-books/page.tsx   # Read/wishlist management
│   │   ├── read-books/page.tsx     # Reading chart
│   │   ├── layout.tsx              # Root layout and providers
│   │   └── page.tsx                # Home route
│   ├── assets/                     # Logo and hero image
│   └── types/                      # Shared TypeScript types
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Current Scope and Next Steps

The current version intentionally focuses on the browsing and list-management experience. The following UI elements are present as visual placeholders and are not connected to application logic yet:

- Sign In and Sign Up buttons
- The hero banner’s “View The List” button

Potential next improvements include:

- Persisting lists with `localStorage` or a backend database
- Preventing duplicate entries and supporting removal from lists
- Adding search, category filters, and pagination
- Connecting authentication and user-specific reading lists
- Loading data through a production API instead of a local JSON file
- Adding automated component and end-to-end tests

## Deployment

The application can be deployed to any platform that supports Next.js. For Vercel:

1. Import the repository into a Vercel project.
2. Use the default Next.js build settings.
3. Deploy.

The production build command is `npm run build`, and the application is served with `npm start`.

## License

No license has been specified for this repository yet.
