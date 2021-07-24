import React from 'react'
import './SidebarRow.css'

function SidebarRow(props) {
    return (
        <div className={`sidebar__row ${props.selected && 'selected'}`}>
            {/* <props.Icon /> */}
            <img src={props.Icon} alt={props.Icon}/>
            <h2 className='sidebar__title'>{props.title}</h2>
        </div>
    )
}

export default SidebarRow
