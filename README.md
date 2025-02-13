# AuthUserProvider
# Next.js + TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Julia-Lm/AuthUserProvider

2. Install dependencies:

    npm install

##  Running the Project

To start the development server, run:

    npm  run dev

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How it works:

### UserProvider

- Manages the authentication state.
- Loads user data from localStorage on initial render.
- Simulates a loading delay before rendering the application.
- Provides login and logout functions to update user sessions and store them in localStorage.

### ProtectedRoute

- Ensures that only authenticated users can access specific pages.
- Redirects unauthenticated users to the login page if they attempt to visit protected routes.

### Routing & State Management

- The application uses useAuth (via UserProvider) to check if a user is logged in.
- If user is null, restricted pages redirect to /login.
- Environment variables allow configuration of API URLs.
