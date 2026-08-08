import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-pink-950 rounded-lg p-6">
        <img
          className="w-48 h-48 rounded-full border-2 border-pink-950 mx-auto"
          src={profile}
        />

        <div className="my-5">
          <div className="flex gap-2">
            <p className="font-bold">Name:</p>
            <p>John</p>
          </div>

          <div className="flex gap-2">
            <p className="font-bold">Job:</p>
            <p>Software Engineer</p>
          </div>

          <div className="flex gap-2">
            <p className="font-bold">Location:</p>
            <p>Nigeria</p>
          </div>

          <div className="flex gap-2">
            <p className="font-bold">Bio:</p>
            <p>Software Engineering Student</p>
          </div>
        </div>

        <button className="border-2 border-pink-950 px-4 py-2 rounded-lg mx-auto block">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default App;
