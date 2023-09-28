import { auth } from "../firebase";
import { authContext } from "../AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

let Home = () => {
  let user = useContext(authContext);

  return (
    <>
      {user ? "" : <Navigate to="/login" />}

      <h1>Home</h1>

      <button
        className="btn btn-danger"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
