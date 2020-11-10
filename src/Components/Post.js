import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIclon from '@material-ui/icons/AccountCircle';

function Post({profilePic, image ,username, timeStamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar' />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timeStamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message} </p>
            </div>
            {
                image ? (
                <div className="post_image">
                        <img src={"https://facebook-backend-mern.herokuapp.com/retrive/image/single?name="+image} alt="" />
                </div>) :
                (
                    console.log("Debug no image here")
                )
            }

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIclon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;