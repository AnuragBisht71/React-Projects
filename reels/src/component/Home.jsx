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
        onClick={(e) => {
          e.currentTarget.value = null;
        }}
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

          let uploadTask = storage
            .ref(`/post/${user.uid}/${Date.now() + "-" + name}`)
            .put(videoObj);

          uploadTask.on("stage_changed", null, null, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              console.log(url);
            });
          });
        }}
      />
    </>
  );
};

export default Home;
