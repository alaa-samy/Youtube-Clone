import React from 'react'
import ChannelRow from '../ChannelRow/ChannelRow'
import VideoRow from '../VideoRow/VideoRow'
import Filter from './../assets/images/filter.png'
import './Search.css'

function ReactPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <img src={Filter} alt='' />
                <h2>Filters</h2>
            </div>
            <hr />

            <ChannelRow  image='https://cms-assets.tutsplus.com/uploads/users/1795/posts/31602/preview_image/ReactLogo-2.jpg' 
            channel='React' verified 
            videos={5,374}
            subs='2.18M' 
            desc='This comprehensive introduction to React was created by Bob Ziroll (@bobziroll). Bob is the Director of Education at V School,&nbsp;...' />

            <hr />
            <h2 className='latest'>Latest from React</h2>
            <VideoRow image='https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD4APkUElCjtEvoxh3NaiVNE8Y5w'
            title='React in depth'
            views='1M'
            time='2 weeks ago'
            channelImg='https://cms-assets.tutsplus.com/uploads/users/1795/posts/31602/preview_image/ReactLogo-2.jpg'
            channelName='React' 
            desc="This comprehensive introduction to React was created by Bob Ziroll (@bobziroll). Bob is the Director of Education at V School,&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/a_7Z7C_JCyo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC92-bJumQvULAzPDGPIHfXNMsiUg'
            title='Code 15 React Projects - Complete Course'
            views='425K'
            time='8 months ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s68-c-k-c0x00ffffff-no-rj'
            channelName='freeCodeCamp.org' 
            desc="Improve your skills with the React JavaScript library by building 15 projects using React. Code:&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/Ke90Tje7VS0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3_J8cSnEXaxGCt_FS2SLg9dc0SQ'
            title='React JS - React Tutorial for Beginners'
            views='3.7M'
            time='3 years ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQ09D8wVCdgWoCN3IPrvVKWi48-R2QZ_yJkCmKh-A=s68-c-k-c0x00ffffff-no-rj'
            channelName='Programming With Mosh' 
            desc="Want to learn more from me? Check out my blog and courses: Courses: https://codewithmosh.com Blog:&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLK29q76SFGKEvn0XvC6Zk3kGV1w'
            title='Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks'
            views='973K'
            time='9 months ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s68-c-k-c0x00ffffff-no-rj'
            channelName='freeCodeCamp.org' 
            desc="Learn the basics of React in this comprehensive course. You will learn about fundamentals, hooks, context API, react router,&nbsp;..."/>

            <VideoRow image='https://i.ytimg.com/an_webp/N3AkSS5hXMA/mqdefault_6s.webp?du=3000&sqp=COCs74cG&rs=AOn4CLDkwRpEbqfG6nPFTsQgmm8zDfb8KA'
            title='What Is React (React js) & Why Is It So Popular?'
            views='370K'
            time='3 years ago'
            channelImg='https://yt3.ggpht.com/ytc/AKedOLQ09D8wVCdgWoCN3IPrvVKWi48-R2QZ_yJkCmKh-A=s68-c-k-c0x00ffffff-no-rj'
            channelName='Programming Wit Mosh' 
            desc="Want to learn more from me? Check out my blog and courses: Courses: https://codewithmosh.com Blog:&nbsp;..."/>
        </div>
    )
}

export default ReactPage
