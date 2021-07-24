import React from 'react'
import ChannelRow from '../ChannelRow/ChannelRow'
import VideoRow from '../VideoRow/VideoRow'
import Filter from './../assets/images/filter.png'
import './Search.css'

function Firebase() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <img src={Filter} alt='' />
                <h2>Filters</h2>
            </div>
            <hr />

            <ChannelRow  image='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s176-c-k-c0x00ffffff-no-rj-mo' 
            channel='Firebase' verified 
            videos={559}
            subs='312K' 
            desc='The YouTube channel for all things Firebase! Learn how to build awesome apps with hands-on tutorials from the Firebase team.' />

            <hr />
            <h2 className='latest'>Latest from Firebase</h2>
            <VideoRow image='https://i.ytimg.com/vi/DPWlIhiV2Jw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfE0XLu7Pvl52EI2egqbp12AFJ_w'
            title='Getting started with analytics on Android #2: User properties and user-scoped custom dimensions'
            views='904'
            time='1 day ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s176-c-k-c0x00ffffff-no-rj-mo'
            channelName='Firebase' 
            desc="Welcome developers to another episode of Firecasts. In a previous video, we talked about logging events for Analytics with&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/sXBJZD0fBa4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9sm620lfHLLwmSGLYuTzWP2jXPA'
            title='The Firebase Realtime Database and Flutter - Firecasts'
            views='6.5K'
            time='4 days ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s176-c-k-c0x00ffffff-no-rj-mo'
            channelName='Firebase' 
            desc="TL;DR 253 | The Google Developer News Show 0:00 - Introducing the Android Game Development Kit → https://goo.gle/3yTvBIC&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/0VjRPyyLJWw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2RZwpLzBUqTAOq_xDneCTValoAQ'
            title='To show ads or not to show ads - Optimize Your App Revenue'
            views='2.4K'
            time='1 week ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s176-c-k-c0x00ffffff-no-rj-mo'
            channelName='Firebase' 
            desc="Making the decision to start showing ads in your app can be daunting… For one, you don't want to risk alienating your users who&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/sA4tkIZ_C5E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMQCpryaUlF5aYPXHXx0IVXkgrQg'
            title='Meet an Extension: Distributed counter'
            views='4.9K'
            time='2 weeks ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s176-c-k-c0x00ffffff-no-rj-mo'
            channelName='Firebase' 
            desc="... Extension → http://goo.gle/meet-an-extension Subscribe to the Firebase channel → https://goo.gle/Firebase #MeetAnExtension."/>

            <VideoRow image='https://i.ytimg.com/vi/im54lXEujCc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBByJvOXkoAb_-Iv3q45pgCTANdEA'
            title='Firebase Release Notes: June 2021 - iOS Codable API for Database, all about Auth tokens, and more!'
            views='4.8K'
            time='1 month ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s176-c-k-c0x00ffffff-no-rj-mo'
            channelName='Firebase' 
            desc="Welcome to the June 2021 edition of Firebase Release Notes with Frank van Puffelen. In this video, Puf discusses expanded&nbsp;..."/>
        </div>
    )
}

export default Firebase
