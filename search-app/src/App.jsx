import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);

  const [search, setSearch] = useState("");

  // Automatically focus the input when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function focusInput() {
    inputRef.current.focus();
  }

  function clearInput() {
    setSearch("");
    inputRef.current.focus();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Search App</h1>

        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search something..."
          className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 flex gap-3">
          <button
            onClick={focusInput}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Focus
          </button>

          <button
            onClick={clearInput}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Clear
          </button>
        </div>

        <p className="mt-6 text-gray-600">You typed:</p>

        <p className="mt-1 text-xl font-semibold">{search || "Nothing yet"}</p>
      </div>
    </div>
  );
}

export default App;
