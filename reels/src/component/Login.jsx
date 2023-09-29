import { useContext, useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase";
import { authContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";

let Login = () => {
  let user = useContext(authContext);

  return (
    <>
    
      {user ? <Navigate to="/" /> : ""}
      <button
        className="btn btn-primary m-4"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Login with Google
      </button>
    </>
  );
};

export default Login;
