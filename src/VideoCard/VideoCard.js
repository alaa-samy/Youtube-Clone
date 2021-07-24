import React from 'react'
import './VideoCard.css'

function VideoCard({thumbnailUrl , title , channelName , channelImg , views , postDate , isCustom}) {
    return (
        <div className='videoCard'>
            <img className='videoCard_thumbnail' src={thumbnailUrl} alt=''/>
            <div className='videoCard_info'>
                <div className='videoCard__channelImg'>
                    <img src={channelImg} alt='' />
                </div>
                <div className='videoCard_textInfo'>
                    <p className='title'>{title}</p>
                    <p className='channelName'>{channelName}</p>
                    <p className='views'>{views} views</p> 
                    <span>•</span>
                    <p className='postDate'> {postDate}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
