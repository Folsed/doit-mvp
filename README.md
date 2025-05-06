# DOiT MVP

A minimal viable product for the DOiT blogging platform, built with Next.js, React, Redux Toolkit, and Material UI.

## Features

- **List Posts:** Fetch and display all blog posts with skeleton loaders for improved UX.
- **Post Details:** View individual post content on a dedicated page.
- **Create Post:** Multi-step form using a Stepper component, including title, body, and preview modal.
- **Theme Toggle:** Switch between light and dark modes, with persistent preference.
- **Responsive Design:** Optimized for various screen sizes using Material UI and responsive layouts.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/) & RTK Query
- [Material UI (MUI)](https://mui.com/)
- TypeScript
- ESLint & Prettier

## Project Structure

```
├── app
│   ├── components                       # Components rendered by App Router pages
│   │   └── HeroBanner.tsx               # Welcome banner on the home page
│   ├── globals.css                      # Global styles for the entire application
│   ├── layout.tsx                       # Root layout (Header, theme providers, etc.)
│   ├── page.tsx                         # Home page (/)
│   └── posts                            # Route folder for /posts
│      ├── components                    # Inner components for the posts section
│      │   ├── FloatingActionButton.tsx  # “Create Post” floating action button
│      │   ├── PostCard.tsx              # Card component for individual post
│      │   └── PostsGrid.tsx             # Grid layout for listing posts
│      ├── create                        # Route folder for /posts/create
│      │   ├── components                # Stepper and preview dialog components
│      │   └── page.tsx                  # Multi-step form page for creating a post
│      ├── page.tsx                      # Posts listing page (/posts)
│      └── [id]                          # Dynamic route folder for /posts/[id]
│         ├── components                 # Components for post details
│         └── page.tsx                   # Detailed post page
├── components                           # Global ui components
│   ├── header                           # Header-related components
│   │   ├── DrawerList.tsx               # Sidebar navigation items
│   │   └── Header.tsx                   # AppBar with theme toggle and drawer
│   └── ui                               # Reusable UI elements
│      ├── skeletons                     # Loading skeleton components
│      │   ├── PostSkeletonCard.tsx      # Skeleton for post cards
│      │   └── PostSkeletonDetails.tsx   # Skeleton for post details
│      └── ToggleThemeButton.tsx         # Dark/light mode switch
├── providers
│   ├── MUIThemeProvider.tsx             # Material UI theme provider with CSS vars
│   ├── Providers.tsx                    # Wrapper for all context providers (Theme, Redux)
│   └── StoreProvider.tsx                # Redux store provider
├── store
│   ├── features                         # Redux Toolkit slices / API slices
│   │   └── posts
│   │      └── postsApiSlice.ts          # RTK Query API slice for posts
│   ├── hooks.ts                         # Typed hooks for useSelector and useDispatch
│   └── store.ts                         # Redux store configuration
├── types
│   ├── index.ts                         # Shared TypeScript types
│   └── posts.types.ts                   # Types for post data models
└── utils
   └── handleDelete.ts                   # Utility for handling delete actions (API call + confirm)

```

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/doit-mvp.git
    cd doit-mvp
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Your app should now be running at [`http://localhost:3000`](http://localhost:3000).

## Usage

- **View Posts:** Go to `/posts` to see all posts.
- **Create Post:** Go to `/posts/create` to use the stepper form and preview your post before submitting.
- **Post Details:** Click on a post card to navigate to its detail page.
- **Theme Toggle:** Use the button in the header to switch between light and dark modes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "Add YourFeature"`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
