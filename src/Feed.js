import React,{useState,useEffect} from 'react'
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter(post => post.text && post.text.trim() !== ''))
        );
      }, []);
    return (
        <div className="feed">

            {/* header */}
           
            <div className="feed__header">
        <h2>Home</h2>
        </div>
      

            
           
            {/* tweetbox */}
            <TweetBox />

            {/* post */}
            <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
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
        ))}
      </FlipMove>
            
         
            </div>
       
    )
}

export default Feed;
