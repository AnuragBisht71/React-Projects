import { useState } from "react";
import "./VideoCard.css";

let VideoCard = () => {
  let [playing, setPlaying] = useState(false);

  return (
    <div className="video-card">
      <p className="video-card-user">Fake User</p>
      <span className="video-card-music">
        <span class="material-icons-outlined">audiotrack</span>
        <marquee>Some song</marquee>
      </span>
      <span class="material-icons-outlined video-card-like">
        favorite_border
      </span>
      <span class="material-icons-outlined video-card-comment">comment</span>
      <video
        onClick={(e) => {
          if (playing) {
            e.currentTarget.pause();
            setPlaying(false);
          } else {
            e.currentTarget.play();
            setPlaying(true);
          }
        }}
        loop
        src="https://media.vlipsy.com/vlips/Q9emQSKr/480p.mp4"
        className="video-card-element"
      ></video>
    </div>
  );
};

export default VideoCard;
