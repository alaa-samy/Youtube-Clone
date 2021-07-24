import React from 'react'
import './VideoRow.css'

function VideoRow({views , channelImg , channelName , title  , desc , time , image}) {
    return (
        <div className='videoRow'>
            <div className='videoRow_img'>
                <img src={image} alt='' />
            </div>
            <div className='videoRow_text'>
                <h3>{title}</h3>
                <p>{views} Views <span>•</span> {time}</p>
                <div className='videoRow_channel'>
                    <img src={channelImg} alt='' />
                    <h4>{channelName}</h4>
                </div>
                <p>{desc}</p>
            </div>

        </div>
    )
}

export default VideoRow
