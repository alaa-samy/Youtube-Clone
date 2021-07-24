import React from 'react'
import ChannelRow from '../ChannelRow/ChannelRow'
import Tabs from '../Tabs/Tabs'
import VideoRow from '../VideoRow/VideoRow'
import Filter from './../assets/images/filter.png'
import './Explore.css'

function Explore() {
    return (
        <div className='explorePage'>
            <div className='explorePage_tabs'>
                <Tabs image='https://youtube.com/img/explore/destinations/icons/music_color_32.png'
                name='Music' />
                <Tabs image='https://youtube.com/img/explore/destinations/icons/gaming_color_32.png' name='Gaming' />
                <Tabs image='https://youtube.com/img/explore/destinations/icons/live_color_32.png' name='Live' />
                <Tabs image='https://youtube.com/img/explore/destinations/icons/sports_color_32.png' name='Sport' />
            </div>
            
            <h2 className='trending'>Trending videos</h2>
            <VideoRow image='https://i.ytimg.com/vi/A5mXkCy-Gfo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa24oc8r-8mxgV00ZaEk_02yn_2g'
            title='Android 12 Beta 3, Android Game Development Extension, Quilkin, and more!'
            views='2.6K'
            time='22 hours ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'
            channelName='Google Developer' 
            desc="TL;DR 254 | The Google Developer News Show 0:00 - Android 12 Beta 3 and Final API's → https://goo.gle/3iBxZgw 1:11 - Android&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/z5I8KbIVDio/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLFls0hwcpZq9bNd7mtrc2IuY-Bw'
            title='and more!'
            views='3.9K'
            time='1 week ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'
            channelName='Google Developer' 
            desc="TL;DR 253 | The Google Developer News Show 0:00 - Introducing the Android Game Development Kit → https://goo.gle/3yTvBIC&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/6EKWi0jxmp8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC670ALiVXDub1Wqp-2v7y6PFQxOA'
            title='Top 10 Stadia announcements from Google for Games Developer Summit'
            views='5.6K'
            time='22 hours ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'
            channelName='Google Developer' 
            desc="Want the highlights of the Google for Game Developers Stadia Keynote? We've got you covered! Learn what's new for Stadia in&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/an_webp/q_41b2UtIiw/mqdefault_6s.webp?du=3000&sqp=COCR7IcG&rs=AOn4CLAEUZRu6T30ET4_51ftTFJHnXI7zA'
            title='Connecting with gaming creators: 4 things developers should know'
            views='10K'
            time='1 week ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'
            channelName='Google Developer' 
            desc="Hear directly from YouTube gaming creators about best practices they think all marketers and game developers would benefit&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/an_webp/qDlMQjPmPE0/mqdefault_6s.webp?du=3000&sqp=CMj_64cG&rs=AOn4CLD0bdFQTH5zg2wv2m9AnG7JvF8-iw'
            title='Bringing new value to Stadia partners'
            views='4.1K'
            time='1 week ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'
            channelName='Google Developer' 
            desc="Brand new incentives are coming to Stadia and they empower developers to drive their success in awesome ways. Learn how to&nbsp;..."/>
        </div>
    )
}

export default Explore
