import React from 'react'
import './Sidebar.css'
import Explore from './../assets/images/explore.png'
import Home from '../assets/images/home.png'
import Subs from '../assets/images/subs.png'
import Library from '../assets/images/library.png'
import History from '../assets/images/history.png'
import Videos from '../assets/images/video.png'
import Later from '../assets/images/later.png'
import Like from '../assets/images/like.png'
import SidebarRow from './../SidebarRow/SidebarRow'
import {Link} from 'react-router-dom'

import { HouseDoorFill , CaretRightSquare , HandThumbsUpFill , } from 'react-bootstrap-icons'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to='/'>
                <SidebarRow selected Icon={Home} title='Home'/>
            </Link>
            <Link to='/explore'>
                <SidebarRow Icon={Explore} title='Explore'/>
            </Link>
            <SidebarRow Icon={Subs} title='Subscriptions'/>
            <hr />
            <SidebarRow Icon={Library} title='Library'/>
            <SidebarRow Icon={History} title='History'/>
            <SidebarRow Icon={Videos} title='Your videos'/>
            <SidebarRow Icon={Later} title='Watch later'/>
            <SidebarRow Icon={Like} title='Liked videos'/>
            <hr />
        </div>
    )
}

export default Sidebar
