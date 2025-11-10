import React, { forwardRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Post.css'
import db from "./firebase";
import firebase from "firebase";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ id, displayName, username, verified, text, image, avatar, comments, retweets, favorites }, ref) => {
    const history = useHistory();
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);
    const [comment, setComment] = useState("");

    const handleComment = (e) => {
      e.stopPropagation();
      setIsCommentBoxOpen(!isCommentBoxOpen);
    };

    const handleRetweet = (e) => {
      e.stopPropagation();
      if (isRetweeted) {
        db.collection("posts").doc(id).update({
          retweets: firebase.firestore.FieldValue.increment(-1)
        }).catch(e => console.error(e));
      } else {
        db.collection("posts").doc(id).update({
          retweets: firebase.firestore.FieldValue.increment(1)
        }).catch(e => console.error(e));
      }
      setIsRetweeted(!isRetweeted);
    };

    const handleFavorite = (e) => {
      e.stopPropagation();
      if (isFavorited) {
        db.collection("posts").doc(id).update({
          favorites: firebase.firestore.FieldValue.increment(-1)
        }).catch(e => console.error(e));
      } else {
        db.collection("posts").doc(id).update({
          favorites: firebase.firestore.FieldValue.increment(1)
        }).catch(e => console.error(e));
      }
      setIsFavorited(!isFavorited);
    };

    const postComment = (e) => {
        e.stopPropagation();
        e.preventDefault();
        db.collection("posts").doc(id).collection("comments").add({
            text: comment,
            username: "guest", // In a real app, you'd get the current user
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        db.collection("posts").doc(id).update({
            comments: firebase.firestore.FieldValue.increment(1)
        }).catch(e => console.error(e));
        setComment("");
        setIsCommentBoxOpen(false);
    }

    const openPost = () => {
        history.push(`/post/${id}`);
    }

    return (
      <div className="post" ref={ref} onClick={openPost}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <div className="post__footer__option" onClick={handleComment}>
              <ChatBubbleOutlineIcon fontSize="small" />
              <span>{comments}</span>
            </div>
            <div className={`post__footer__option ${isRetweeted && "post__footer__option--retweeted"}`} onClick={handleRetweet}>
              <RepeatIcon fontSize="small" />
              <span>{retweets}</span>
            </div>
            <div className={`post__footer__option ${isFavorited && "post__footer__option--favorited"}`} onClick={handleFavorite}>
              {isFavorited ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
              <span>{favorites}</span>
            </div>
            <PublishIcon fontSize="small" />
          </div>
          {isCommentBoxOpen && (
            <form className="post__commentBox" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button type="submit" onClick={postComment}>Comment</Button>
            </form>
          )}
        </div>
      </div>
    );
  }
);

export default Post;
