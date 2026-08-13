import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ProtectedDashboard />
    </div>
  );
}

export default App;
