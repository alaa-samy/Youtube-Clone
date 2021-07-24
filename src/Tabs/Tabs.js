import React from 'react'
import './Tabs.css'

function Tabs({image , name}) {
    return (
        <div className='tabs'>
            <img src={image} alt='/' />
            <h2>{name}</h2>
        </div>
    )
}

export default Tabs
