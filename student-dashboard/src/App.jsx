import "./App.css";

function App() {
  const name = "john";
  const course = "computer science";
  const level = 300;
  const GPA = 4.2;
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDay();
  const noCourse = 3;
  const isStudent = true;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          
          Student Profile
        </h1>
        <div className="space-y-4">
          
          <div className="flex justify-between border-b pb-2">
            
            <p className="font-semibold text-gray-600">Name:</p>
            <p className="text-gray-900">{name}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            
            <p className="font-semibold text-gray-600">Course:</p>
            <p className="text-gray-900">{course}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            
            <p className="font-semibold text-gray-600">Level:</p>
            <p className="text-gray-900">{level}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            
            <p className="font-semibold text-gray-600">GPA:</p>
            <p className="text-gray-900">{GPA}</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            
            <p className="font-semibold text-gray-600">Date:</p>
            <p className="text-gray-900">
              
              {day} / {month} / {year}
            </p>
          </div>
          <div className="flex justify-between border-b pb-2">
            
            <p className="font-semibold text-gray-600">Courses:</p>
            <p className="text-gray-900">{noCourse}</p>
          </div>
        </div>
        {isStudent && (
          <p className="mt-6 text-center bg-green-100 text-green-700 font-semibold py-3 rounded-lg">
            {" "}
            You are welcomed 🎉{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
