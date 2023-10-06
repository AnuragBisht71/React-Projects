import { useState } from "react";
import "./VideoCard.css";

let VideoCard = (props) => {
  let [playing, setPlaying] = useState(false);
  let [commentBoxOpen, setCommentBoxOpen] = useState(false);

  return (
    <div className="video-card">
      <p className="video-card-user">{props.data.name}</p>
      <span className="video-card-music">
        <span className="material-icons-outlined">audiotrack</span>
        <marquee>Some song</marquee>
      </span>
      <span className="material-icons-outlined video-card-like">
        favorite_border
      </span>
      <span
        onClick={(e) => {
          if (commentBoxOpen) {
            setCommentBoxOpen(false);
          } else {
            setCommentBoxOpen(true);
          }
        }}
        className="material-icons-outlined video-card-comment"
      >
        comment
      </span>

      {commentBoxOpen ? (
        <div className="video-card-comment-box">
          <div className="comments">
            <div className="post-user-comment">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="user"
              />
              <div>
                <h6>Username</h6>
                <p>This is an actual comment</p>
              </div>
            </div>
            <div className="post-user-comment">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="user"
              />
              <div>
                <h6>Username</h6>
                <p>This is an actual comment</p>
              </div>
            </div>
          </div>
          <div className="comment-form">
            <input type="text" />
            <button>Post</button>
          </div>
        </div>
      ) : (
        ""
      )}

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
        src={props.data.url}
        className="video-card-element"
      ></video>
    </div>
  );
};

export default VideoCard;
