import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bscore, setBscore] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-8">
          Basketball Score
        </h1>

        {/* Team A */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">Team A</h2>
          <p className="text-5xl font-bold mb-4">{score}</p>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setScore(score + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              +1
            </button>

            <button
              onClick={() => setScore(score + 2)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              +2
            </button>

            <button
              onClick={() => setScore(0)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Team B */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Team B</h2>
          <p className="text-5xl font-bold mb-4">{bscore}</p>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setBscore(bscore + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              +1
            </button>

            <button
              onClick={() => setBscore(bscore + 2)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              +2
            </button>

            <button
              onClick={() => setBscore(0)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
