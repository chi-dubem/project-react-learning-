import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {loggedIn ? (
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Welcome back, Dubem! 👋</h1>

          <button
            onClick={() => setLoggedIn(false)}
            className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">You are logged out</h1>

          <button
            onClick={() => setLoggedIn(true)}
            className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
