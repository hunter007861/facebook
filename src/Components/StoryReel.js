import React from "react";
import "./StoryReel.css";
import Story from "./Story";


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc="http://www.thenerddaily.com/wp-content/uploads/2018/09/Robert-Downey-Jr.jpg"
                title='Sarvesh Bhosale'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc="https://th.bing.com/th/id/OIP.sG290gEpYRXSCj13haG7lQHaKi?pid=Api&rs=1"
                title='Aditi Rane'
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc="https://www.uttarpradesh.org/wp-content/uploads/2018/12/Raj-Thackeray-1.jpg"
                title='Shubham Rane'
            />
            <Story
                image="https://cdn.trendhunterstatic.com/thumbs/abstract-portrait.jpeg"
                profileSrc="https://vignette2.wikia.nocookie.net/doraemon/images/9/95/Ll80.PNG/revision/latest?cb=20150602045921&path-prefix=en"
                title="Shrey Gandhi"
                />

        </div>
    );
}

export default StoryReel;