import { auth } from "../firebase";
import { authContext } from "../AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";
import VideoCard from "./VideoCard";

let Home = () => {
  let user = useContext(authContext);

  return (
    <>
      {user ? "" : <Navigate to="/login" />}

      <div className="video-container">
        <VideoCard />
      </div>

      <button
        className="home-logout-btn"
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
