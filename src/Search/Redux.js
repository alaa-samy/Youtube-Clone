import React from 'react'
import ChannelRow from '../ChannelRow/ChannelRow'
import VideoRow from '../VideoRow/VideoRow'
import Filter from './../assets/images/filter.png'
import './Search.css'

function Redux() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <img src={Filter} alt='' />
                <h2>Filters</h2>
            </div>
            <hr />

            <ChannelRow  image='https://yt3.ggpht.com/ytc/AKedOLT_yXUCDGgZ0i5uHjgHxSJ-Lu_wjlzZgYk98flI=s68-c-k-c0x00ffffff-no-rj' 
            channel='Redux' verified 
            videos={5,374}
            subs='2M' 
            desc='Learn the basics of React in this comprehensive course. You will learn about fundamentals, hooks, context API, react router, ...' />

            <hr />
            <h2 className='latest'>Latest from Redux</h2>
            <VideoRow image='https://i.ytimg.com/vi/CVpUuw9XSjY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4AVL4q57dzCmBjjLfwGxLdTzRyw'
            title='YRedux For Beginners | React Redux Tutorial'
            views='739K'
            time='2 years ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s68-c-k-c0x00ffffff-no-rj'
            channelName='Dev ED' 
            desc="DISCLAIMERS: I am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/poQXNp9ItL4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnwcAv_MMtEK5UwckGV2DiOSmbtQ'
            title='Redux Tutorial - Learn Redux from Scratch'
            views='458K'
            time='1 year ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQ09D8wVCdgWoCN3IPrvVKWi48-R2QZ_yJkCmKh-A=s68-c-k-c0x00ffffff-no-rj'
            channelName='Programming With Mosh' 
            desc="CONNECT WITH ME My Courses: http://codewithmosh.com My Blog: http://programmingwithmosh.com My Facebook:&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/iBUJVy8phqw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOcbV4WgeSolJGXIACMmCBW6yycA'
            title='Redux Tutorial (with Redux Toolkit)'
            views='47K'
            time='5 months ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s68-c-k-c0x00ffffff-no-rj'
            channelName='The Net Ninja' 
            desc="Hey gang, in this tutorial, Anthony will sow you how to get up and running with Redux using Redux Toolkit. Check out Anthony's&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/an_webp/eUMbH6X_Adc/mqdefault_6s.webp?du=3000&sqp=COLl74cG&rs=AOn4CLA-msN9ovFYIu3WldUpMSn1idBFpw'
            title='Redux Saga Tutorial | Simple Example | React Redux series Part 8'
            views='150K'
            time='2 years ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSWHz5gd-_6BgG_MHR8vVOS3Lh640HWHvHtCuz0=s68-c-k-c0x00ffffff-no-rj'
            channelName='techsith' 
            desc="Redux-saga Explained , How to handle Asynchronous Actions with Redux saga Middleware using Generator Functions and yield."/>

        </div>
    )
}

export default Redux
