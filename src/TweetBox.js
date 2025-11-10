import React, { useState } from "react";
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import CloseIcon from "@material-ui/icons/Close";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setTweetImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrl = (e) => {
    const url = e.target.value;
    setTweetImage(url);
    setImagePreview(url);
  };

  const removeImage = () => {
    setTweetImage("");
    setImagePreview("");
  };

  const sendTweet = (e) => {
    e.preventDefault();

    if (!tweetMessage) {
      return;
    }

    db.collection("posts").add({
      displayName: "prajwal",
      username: "prajwalr308",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
      comments: 0,
      retweets: 0,
      favorites: 0,
    });

    setTweetMessage("");
    setTweetImage("");
    setImagePreview("");
  };

    return (
        <div className="tweetBox">
           <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="tweetBox__imagePreview">
            <img src={imagePreview} alt="Preview" />
            <button
              type="button"
              className="tweetBox__removeImage"
              onClick={removeImage}
            >
              <CloseIcon />
            </button>
          </div>
        )}

        {/* Image Options */}
        <div className="tweetBox__imageOptions">
          <label htmlFor="image-upload" className="tweetBox__imageLabel">
            <ImageIcon className="tweetBox__imageIcon" />
            <span>Upload Image</span>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />

          <input
            value={tweetImage}
            onChange={handleImageUrl}
            className="tweetBox__imageInput"
            placeholder="Or enter image URL"
            type="text"
          />
        </div>

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
          disabled={!tweetMessage}
        >
          Tweet
        </Button>
      </form>

        </div>
    )
}

export default TweetBox;
