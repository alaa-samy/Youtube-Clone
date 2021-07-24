import React from 'react'
import './Recommendation.css'
import VideoCard from './../VideoCard/VideoCard'
import {Link} from 'react-router-dom'

function Recommendation() {
    return (
        <div className='recommended'>
            <Link to="/react">
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD4APkUElCjtEvoxh3NaiVNE8Y5w' title='React in depth' channelName='React' views='1M' postDate='2 weeks ago' channelImg='https://cms-assets.tutsplus.com/uploads/users/1795/posts/31602/preview_image/ReactLogo-2.jpg' />
            </Link>
            
            <Link to='/google-developers'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/z5I8KbIVDio/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLFls0hwcpZq9bNd7mtrc2IuY-Bw' title='and more!' channelName='Google Developers' views='3.9K' postDate='1 weeks ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
            
            <Link to='/redux'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/CVpUuw9XSjY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4AVL4q57dzCmBjjLfwGxLdTzRyw' title='YRedux For Beginners | React Redux Tutorial' channelName='Dev ED' views='739K' postDate='2 years ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
            
            <Link to='/firebase'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/O17OWyx08Cg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQlvQdvmh2BsUYsOutrRc93EF5Rg' title='Introducing Firebase' channelName='Firebase' views='1.2M' postDate='5 years ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
            
            <Link to='/firebase'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/O17OWyx08Cg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQlvQdvmh2BsUYsOutrRc93EF5Rg' title='Introducing Firebase' channelName='Firebase' views='1.2M' postDate='5 years ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
            
            <Link to='/react'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD4APkUElCjtEvoxh3NaiVNE8Y5w' title='React in depth' channelName='React' views='1M' postDate='2 weeks ago' channelImg='https://cms-assets.tutsplus.com/uploads/users/1795/posts/31602/preview_image/ReactLogo-2.jpg' />
            </Link>
           
            <Link to='/google-developers'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/z5I8KbIVDio/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLFls0hwcpZq9bNd7mtrc2IuY-Bw' title='and more!' channelName='Google Developers' views='3.9K' postDate='1 weeks ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
            
            <Link to='/firebase'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/O17OWyx08Cg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQlvQdvmh2BsUYsOutrRc93EF5Rg' title='Introducing Firebase' channelName='Firebase' views='1.2M' postDate='5 years ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLQV7AS-uSmgD7Rl7QsmhazGjn2XQGNIkqYUislhbQ=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
            
            <Link to='/redux'>
                <VideoCard thumbnailUrl='https://i.ytimg.com/vi/CVpUuw9XSjY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4AVL4q57dzCmBjjLfwGxLdTzRyw' title='Redux For Beginners | React Redux Tutorial' channelName='Dev ED' views='739K' postDate='2 years ago' channelImg='https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s68-c-k-c0x00ffffff-no-rj'/>
            </Link>
        </div>
    )
}

export default Recommendation
