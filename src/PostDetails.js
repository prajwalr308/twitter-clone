import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from './firebase';
import Post from './Post';
import './PostDetails.css';

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (postId) {
      db.collection('posts')
        .doc(postId)
        .onSnapshot((snapshot) => setPost({ id: snapshot.id, ...snapshot.data() }));

      db.collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setComments(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [postId]);

  return (
    <div className="postDetails">
      {post && (
        <Post
          id={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          comments={post.comments}
          retweets={post.retweets}
          favorites={post.favorites}
        />
      )}
      <div className="postDetails__comments">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div className="postDetails__comment">
            <p>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetails;
