import { useEffect } from "react";
import { signInWithGoogle, auth } from "../firebase";

let Login = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (
    <>
      <button
        className="btn btn-primary m-4"
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Login with Google
      </button>

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

export default Login;
