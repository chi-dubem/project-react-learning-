import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Digital Clock</h1>

        <h2 className="text-5xl font-bold text-blue-600">
          {time.toLocaleTimeString()}
        </h2>

        <p className="mt-4 text-gray-600">
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default App;
