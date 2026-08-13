import Login from "./Login";

function withAuth(Component) {
  return function ProtectedComponent(props) {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      return <Login />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
