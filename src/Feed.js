import React from 'react'
import StoryReel from './StoryReel';
import './Feed.css';
import MessageSender from './MessageSender'
import Post from "./Post"
function Feed() {
  return (
    <div className="feed">
        <StoryReel></StoryReel>
        <MessageSender></MessageSender>
        <Post userName="Shivam" 
        profilePic="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__180.png"
         timestamp="24-10-2011"
        image="https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363__340.jpg"
        message="Wow this is a Great Clone"
        ></Post>
    </div>
  )
}

export default Feed;