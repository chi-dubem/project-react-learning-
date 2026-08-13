import MouseTracker from "./MouseTracker";

function App() {
  return (
    <MouseTracker
      render={(position) => (
        <div className="flex min-h-screen items-center justify-center">
          <div className="rounded-xl bg-white p-8 text-center shadow-lg">
            <h1 className="mb-4 text-3xl font-bold">Mouse Position</h1>

            <p className="text-xl">X: {position.x}</p>

            <p className="text-xl">Y: {position.y}</p>
          </div>
        </div>
      )}
    />
  );
}

export default App;
