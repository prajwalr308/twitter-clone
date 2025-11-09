import React from 'react'
import './SiderbarOption.css'

function SidebarOption({active, text, Icon, onClick}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={onClick}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption 
