import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Post({profilePic,userName,image,timestamp,message}) {
  return (
    <div className='post'>
        <div className="post__top">
            <Avatar className='post__avatar' src={profilePic}></Avatar>
            <div className="post__topInfo">
                <h3>{userName}</h3>
                <p>{timestamp}</p>
            </div>
        </div>
        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="" />
        </div>    
        <div className="post__options"> 
            <div className="post__option">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreOutlinedIcon />
            </div>
        </div>

    </div>
  )
}

export default Post