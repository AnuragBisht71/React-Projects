import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider";
import { firestore } from "../firebase";
import "./VideoCard.css";

let VideoCard = (props) => {
  let [playing, setPlaying] = useState(false);
  let [commentBoxOpen, setCommentBoxOpen] = useState(false);
  let [currUserComment, setCurrUserComment] = useState("");
  let [comments, setComments] = useState([]);

  let user = useContext(authContext);

  let currUserLiked;
  if (user) {
    currUserLiked = props.data.likes.includes(user.uid);
  }

  useEffect(() => {
    let f = async () => {
      let commentArr = props.data.comments;
      let arr = [];
      for (let i = 0; i < commentArr.length; i++) {
        let commentDoc = await firestore
          .collection("comments")
          .doc(commentArr[i])
          .get();
        arr.push(commentDoc.data());
      }

      setComments(arr);
    };

    f();
  }, [props]);

  return (
    <div className="video-card">
      <p className="video-card-user">{props.data.name}</p>
      <span className="video-card-music">
        <span className="material-icons-outlined">audiotrack</span>
        <marquee>Some song</marquee>
      </span>
      <span
        className="material-icons-outlined video-card-like"
        onClick={() => {
          let likesArr = props.data.likes;
          if (currUserLiked) {
            likesArr = likesArr.filter((el) => el != user.uid);
          } else {
            likesArr.push(user.uid);
          }
          firestore
            .collection("posts")
            .doc(props.data.id)
            .update({ likes: likesArr });
        }}
      >
        {currUserLiked ? "favorite" : "favorite_border"}
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
            {comments.map((el) => {
              return (
                <div className="post-user-comment">
                  <img
                    src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                    alt="user"
                  />
                  <div>
                    <h6>{el.name}</h6>
                    <p>{el.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment-form">
            <input
              type="text"
              value={currUserComment}
              onChange={(e) => {
                setCurrUserComment(e.currentTarget.value);
              }}
            />
            <button
              onClick={async () => {
                let docRef = await firestore.collection("comments").add({
                  name: user.displayName,
                  comment: currUserComment,
                });

                setCurrUserComment("");

                let doc = await docRef.get();
                let commentId = doc.id;

                let postDoc = await firestore
                  .collection("posts")
                  .doc(props.data.id)
                  .get();
                let postCommentArr = postDoc.data().comments;

                postCommentArr.push(commentId);

                await firestore.collection("posts").doc(props.data.id).update({
                  comments: postCommentArr,
                });
              }}
            >
              Post
            </button>
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
