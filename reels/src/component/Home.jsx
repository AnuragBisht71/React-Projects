import { auth, storage } from "../firebase";
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

      <input
        type="file"
        onChange={(e) => {
          let videoObj = e.currentTarget.files[0];
          let { name, size, type } = videoObj;

          size = size / 1000000;

          if (size > 10) {
            alert("file size exceeds 10mb");
            return;
          }

          type = type.split("/")[0];

          if (type !== "video") {
            alert("Please upload a video file");
            return;
          }

          storage.ref(`/post/${user.uid}/${Date.now() + name}`).put(videoObj);
        }}
      />
    </>
  );
};

export default Home;
