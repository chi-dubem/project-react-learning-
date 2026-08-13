function Login() {
  return (
    <div className="rounded-xl bg-white p-8 text-center shadow-lg">
      <h1 className="mb-4 text-3xl font-bold">Please Login</h1>

      <p className="mb-4 text-gray-600">
        You need to login to access the dashboard.
      </p>

      <button className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600">
        Login
      </button>
    </div>
  );
}

export default Login;
