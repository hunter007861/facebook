import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from './axios'
import Pusher from "pusher-js"

const pusher = new Pusher('1e28d49b2ddf777a7081', {
    cluster: 'ap2'
});


const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get("/retrive/posts")
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function (data) {
           syncFeed()
        });
    }, [])

    useEffect(() => {
        syncFeed()
    }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timeStamp={entry.timestamp}
                        image={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed
