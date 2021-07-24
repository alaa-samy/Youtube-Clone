import React from 'react'
import './ChannelRow.css'
import Verify from './../assets/images/verified.png'

function ChannelRow({image , channel , verified , videos , subs , desc}) {
    return (
        <div className='channelRow'>
            <div className='channelRow_inner'>
                <div className='channelRow_img'>
                    <img src={image} alt='' />
                </div>
                <div className='channelRow_text'>
                    <h4>{channel} {verified && <img src={Verify} alt='' />}</h4>
                    <p>{subs} Subscribes <span>•</span> {videos} Videos</p>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='channelRow_btn'>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default ChannelRow
